import { useMemo, useState } from "react";
import { useAppContext } from "../../contexts/AppContext";
import type { MuseumItem } from "../../types";
import * as XLSX from "xlsx";

type ExcelRow = (string | number)[];
type ExcelData = ExcelRow[];

function createEmptyItem(): MuseumItem {
  return {
    id: Date.now().toString(),
    name: "新展品",
    category: "contemporary",
    country: "中国",
    era: "2026",
    collectionDate: new Date().toISOString().split("T")[0],
    material: "未知",
    dimensions: "0×0×0",
    description: "请输入藏品说明",
    status: "available",
    price: 0,
    images: [], // 默认无图片（保持正确）
    tags: [],
    isRecommended: false, // 补充缺失的字段
    isNew: false // 补充缺失的字段
  };
}

export default function ItemsPage() {
  const { items, categories, addItem, removeItem, updateItem } = useAppContext();

  const [keyword, setKeyword] = useState("");
  const [editing, setEditing] = useState<MuseumItem | null>(null);

  // Excel 相关状态
  const [excelData, setExcelData] = useState<ExcelData>([]);
  const [excelFileName, setExcelFileName] = useState("");
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());

  // 处理文件上传
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setExcelFileName(file.name);

    const reader = new FileReader();
    reader.onload = (evt) => {
      const binaryStr = evt.target?.result;
      const workbook = XLSX.read(binaryStr, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 }) as ExcelData;
      setExcelData(data);
      setSelectedRows(new Set());
    };
    reader.readAsBinaryString(file);
  };

  // 将 Excel 行转换为 MuseumItem（修复 images 初始值）
  const rowToItem = (row: ExcelRow): MuseumItem => {
    const [
      name = "",
      category = "contemporary",
      country = "中国",
      era = "2026",
      material = "未知",
      dimensions = "0×0×0",
      description = "",
      status = "collection",
      price = 0,
      image = "", // 改为空字符串，避免强制塞默认图片
      tagsStr = "",
    ] = row;

    return {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 5),
      name: String(name),
      category: String(category),
      country: String(country),
      era: String(era),
      collectionDate: new Date().toISOString().split("T")[0],
      material: String(material),
      dimensions: String(dimensions),
      description: String(description),
      status: (String(status) as MuseumItem["status"]) || "collection",
      price: Number(price) || 0,
      images: image ? [String(image)] : [], // 修复：仅当有图片时才添加
      tags: String(tagsStr).split(",").map(t => t.trim()).filter(Boolean),
      isRecommended: false,
      isNew: false,
    };
  };

  // 导入单行
  const importRow = (row: ExcelRow, rowIndex: number) => {
    const newItem = rowToItem(row);
    addItem(newItem);
    setExcelData(prev => {
      const newData = [...prev];
      newData.splice(rowIndex + 1, 1);
      return newData;
    });
    setSelectedRows(prev => {
      const newSet = new Set(prev);
      if (newSet.has(rowIndex)) newSet.delete(rowIndex);
      return newSet;
    });
  };

  // 导入选中的行
  const importSelected = () => {
    if (excelData.length === 0) return;
    const newItems = excelData.slice(1).filter((_, idx) => selectedRows.has(idx)).map(rowToItem);
    newItems.forEach(item => addItem(item));
    setExcelData([]);
    setExcelFileName("");
    setSelectedRows(new Set());
  };

  // 导入全部（跳过表头）
  const importAll = () => {
    if (excelData.length <= 1) return;
    const newItems = excelData.slice(1).map(rowToItem);
    newItems.forEach(item => addItem(item));
    setExcelData([]);
    setExcelFileName("");
    setSelectedRows(new Set());
  };

  // 切换行选中
  const toggleRow = (index: number) => {
    setSelectedRows(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) newSet.delete(index);
      else newSet.add(index);
      return newSet;
    });
  };

  // ---------- 多图片处理函数（核心修复） ----------
  const handleAddImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    // 1. 增加非空校验
    if (!files || files.length === 0 || !editing) {
      alert("请选择图片或确认当前处于编辑状态");
      return;
      
    }

    const readers: Promise<string>[] = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      // 2. 过滤非图片文件
      if (!file.type.startsWith('image/')) {
        alert(`文件 ${file.name} 不是图片，请重新选择`);
        continue;
      }
      readers.push(
        new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            // 3. 校验 Base64 结果
            if (reader.result) {
              resolve(reader.result as string);
            } else {
              resolve('/images/placeholder.png'); // 兜底
            }
          };
          // 4. 错误处理
          reader.onerror = () => resolve('/images/placeholder.png');
          reader.readAsDataURL(file);
        })
      );
    }

    Promise.all(readers).then((base64Images) => {
      // 5. 安全更新状态（移除非空断言，增加校验）
      setEditing(prev => {
        if (!prev) return null;
        return {
          ...prev,
          images: [...(prev.images || []), ...base64Images]
        };
      });
      // 清空 input 值，允许重复选择同一文件
      e.target.value = '';
    });
  };

  const handleRemoveImage = (indexToRemove: number) => {
    // 1. 增加完整校验
    if (!editing || !Array.isArray(editing.images)) return;
    
    // 2. 安全更新图片数组
    setEditing(prev => {
      if (!prev) return null;
      return {
        ...prev,
        images: prev.images.filter((_, idx) => idx !== indexToRemove)
      };
    });
  };
  // ---------- 多图片处理结束 ----------

  // 原有的搜索过滤
  const filtered = useMemo(() => {
    const key = keyword.trim();
    if (!key) return items;
    return items.filter((item) => item.name.includes(key) || item.description.includes(key));
  }, [items, keyword]);

  return (
    <div className="space-y-6">
      {/* 标题和添加按钮 */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-2xl font-bold text-dark">展品管理</h2>
        <button className="btn-primary px-4 py-2 rounded-lg bg-[#6B3E26] text-white" onClick={() => setEditing(createEmptyItem())}>
          添加展品
        </button>
      </div>

      {/* Excel 上传区域 */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-4">
        <h3 className="text-lg font-semibold">从 Excel 批量导入</h3>
        <input
          type="file"
          accept=".xlsx, .xls, .csv"
          onChange={handleFileUpload}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#6B3E26] file:text-white hover:file:bg-[#5C3317]"
        />
        {excelFileName && <p className="text-sm text-gray-500">已选择：{excelFileName}</p>}

        {excelData.length > 0 && (
          <div className="mt-4">
            <div className="flex items-center gap-2 mb-2">
              <button
                onClick={importAll}
                className="px-3 py-1 rounded bg-green-600 text-white text-sm hover:bg-green-700"
              >
                全部导入
              </button>
              <button
                onClick={importSelected}
                className="px-3 py-1 rounded bg-blue-600 text-white text-sm hover:bg-blue-700"
                disabled={selectedRows.size === 0}
              >
                导入选中 ({selectedRows.size})
              </button>
              <button
                onClick={() => {
                  setExcelData([]);
                  setExcelFileName("");
                  setSelectedRows(new Set());
                }}
                className="px-3 py-1 rounded border border-gray-300 text-sm"
              >
                取消预览
              </button>
            </div>
            <div className="overflow-x-auto border border-gray-200 rounded-lg">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50">
                  {excelData.slice(0, 1).map((headerRow, i) => (
                    <tr key={i}>
                      <th className="p-2 w-8">选择</th>
                      <th className="p-2 w-16">操作</th>
                      {headerRow.map((cell, idx) => (
                        <th key={idx} className="p-2 text-left whitespace-nowrap">
                          {String(cell)}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody>
                  {excelData.slice(1).map((row, rowIdx) => (
                    <tr key={rowIdx} className="border-t border-gray-100 hover:bg-gray-50">
                      <td className="p-2 text-center">
                        <input
                          type="checkbox"
                          checked={selectedRows.has(rowIdx)}
                          onChange={() => toggleRow(rowIdx)}
                        />
                      </td>
                      <td className="p-2 text-center">
                        <button
                          onClick={() => importRow(row, rowIdx)}
                          className="px-2 py-1 text-xs rounded bg-green-500 text-white hover:bg-green-600"
                          title="导入此行"
                        >
                          导入
                        </button>
                      </td>
                      {row.map((cell, colIdx) => (
                        <td key={colIdx} className="p-2 whitespace-nowrap">
                          {cell !== undefined ? String(cell).substring(0, 30) : ""}
                          {String(cell).length > 30 && "…"}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* 搜索框 */}
      <input
        className="w-full max-w-md px-4 py-2 rounded-lg border border-gray-200"
        placeholder="搜索展品名或描述"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />

      {/* 展品表格 */}
      <div className="overflow-auto bg-white border border-gray-100 rounded-xl">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left p-3">名称</th>
              <th className="text-left p-3">分类</th>
              <th className="text-left p-3">状态</th>
              <th className="text-left p-3">价格</th>
              <th className="text-left p-3">操作</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((item) => (
              <tr key={item.id} className="border-t border-gray-100">
                <td className="p-3">{item.name}</td>
                <td className="p-3">{categories.find((c) => c.id === item.category)?.name ?? item.category}</td>
                <td className="p-3">{item.status}</td>
                <td className="p-3">{item.price}</td>
                <td className="p-3 flex items-center gap-2">
                  <button
                    className="px-2 py-1 rounded bg-[#6B3E26]/10 text-[#6B3E26]"
                    onClick={() => setEditing(item)}
                  >
                    编辑
                  </button>
                  <button
                    className="px-2 py-1 rounded bg-red-50 text-red-600"
                    onClick={() => removeItem(item.id)}
                  >
                    删除
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 编辑表单（修复图片预览/删除） */}
      {editing ? (
        <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-4">
          <h3 className="text-lg font-semibold">编辑展品</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <input
              className="px-3 py-2 rounded-lg border border-gray-200"
              value={editing.name}
              onChange={(e) => setEditing({ ...editing, name: e.target.value })}
              placeholder="名称"
            />
            <select
              className="px-3 py-2 rounded-lg border border-gray-200"
              value={editing.category}
              onChange={(e) => setEditing({ ...editing, category: e.target.value })}
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>

            {/* 多图片上传区域 - 修复渲染问题 */}
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">图片（可多选）</label>
              <div className="flex items-center gap-4">
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleAddImages}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-3 file:px-6 file:rounded-full file:border-0 file:text-base file:font-semibold file:bg-[#6B3E26] file:text-white hover:file:bg-[#5C3317]"
                />
              </div>

              {/* 图片预览列表 - 修复样式兼容性 */}
              {Array.isArray(editing.images) && editing.images.length > 0 && (
                <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {editing.images.map((img, idx) => (
                    <div key={idx} className="relative border rounded overflow-hidden" style={{ aspectRatio: '1/1' }}>
                      {/* 修复图片渲染 */}
                      <img
                        src={img || '/images/placeholder.png'}
                        alt={`预览${idx + 1}`}
                        className="w-full h-full object-contain bg-gray-50"
                        onError={(e) => {
                          console.error('图片加载失败:', img);
                          e.currentTarget.src = '/images/placeholder.png';
                        }}
                      />
                      {/* 修复删除按钮交互 */}
                      <button
                        type="button"
                        onClick={() => handleRemoveImage(idx)}
                        className="absolute top-1 right-1 w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600 transition-colors shadow-lg text-lg font-bold z-20 cursor-pointer"
                        title="删除此图片"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
              {/* 增加空状态提示 */}
              {Array.isArray(editing.images) && editing.images.length === 0 && (
                <p className="text-sm text-gray-500 mt-2">暂无图片，请点击上方按钮选择图片上传</p>
              )}
              <p className="text-xs text-gray-500 mt-1">支持 JPG, PNG, GIF，可多选，图片将转换为 Base64 存储</p>
            </div>

            <input
              className="px-3 py-2 rounded-lg border border-gray-200"
              value={editing.price}
              onChange={(e) => setEditing({ ...editing, price: Number(e.target.value || 0) })}
              placeholder="价格"
              type="number" // 增加 type=number 防止非数字输入
            />
          </div>

          <textarea
            className="w-full px-3 py-2 rounded-lg border border-gray-200"
            rows={4}
            value={editing.description}
            onChange={(e) => setEditing({ ...editing, description: e.target.value })}
            placeholder="描述"
          />

          <div className="flex items-center gap-2">
            <button
              className="px-4 py-2 rounded-lg bg-[#6B3E26] text-white"
              onClick={() => {
                const exists = items.some((item) => item.id === editing.id);
                if (exists) {
                  updateItem(editing);
                } else {
                  addItem(editing);
                }
                setEditing(null);
              }}
            >
              保存
            </button>
            <button className="px-4 py-2 rounded-lg border border-gray-200" onClick={() => setEditing(null)}>
              取消
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}