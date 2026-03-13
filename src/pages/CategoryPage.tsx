import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CollectionCard from "../components/CollectionCard";
import { useAppContext } from "../contexts/AppContext";
import type { MuseumItem } from "../types";

type SortMode = "newest" | "price-asc" | "price-desc";
type StatusFilter = "all" | "available" | "sold" | "collection";
type ViewMode = "grid" | "list";

export default function CategoryPage() {
  const { categoryId } = useParams();
  const { categories, items, favorites, toggleFavorite } = useAppContext();

  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [sortMode, setSortMode] = useState<SortMode>("newest");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [keyword, setKeyword] = useState("");

  const currentCategory = categories.find((category) => category.id === categoryId);

  if (!currentCategory && categoryId && categoryId !== "treasure") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-dark mb-4">分类不存在</h2>
          <Link to="/" className="text-[#ff7e5d] hover:underline">
            返回首页
          </Link>
        </div>
      </div>
    );
  }

  const fallbackCategory = {
    name: "镇馆之宝",
    description: "馆藏最珍贵的精品，代表小猪博物馆的最高收藏水准"
  };

  const category = currentCategory ?? fallbackCategory;

  const filteredItems = useMemo(() => {
    let result: MuseumItem[] = items;

    if (categoryId) {
      result = result.filter((item) => item.category === categoryId);
    }

    if (statusFilter !== "all") {
      result = result.filter((item) => item.status === statusFilter);
    }

    if (keyword.trim()) {
      const lower = keyword.toLowerCase();
      result = result.filter(
        (item) =>
          item.name.toLowerCase().includes(lower) ||
          item.description.toLowerCase().includes(lower) ||
          item.tags.some((tag) => tag.toLowerCase().includes(lower))
      );
    }

    const sorted = [...result].sort((left, right) => {
      if (sortMode === "newest") {
        return new Date(right.collectionDate).getTime() - new Date(left.collectionDate).getTime();
      }
      if (sortMode === "price-asc") {
        return (left.price || 0) - (right.price || 0);
      }
      if (sortMode === "price-desc") {
        return (right.price || 0) - (left.price || 0);
      }
      return 0;
    });

    return sorted;
  }, [items, categoryId, statusFilter, sortMode, keyword]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link to="/" className="hover:text-[#ff7e5d]">
              首页
            </Link>
            <span>›</span>
            <span className="text-dark">{category.name}</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="heading-2 text-dark mb-2">{category.name}</h1>
              <p className="text-gray-600 max-w-2xl">{category.description}</p>
            </div>
            <div className="text-sm text-gray-500">
              共 <span className="font-semibold text-[#ff7e5d]">{filteredItems.length}</span> 件藏品
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-gray-200 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4 flex-wrap">
              <input
                type="text"
                placeholder="搜索藏品名称、标签..."
                value={keyword}
                onChange={(event) => setKeyword(event.target.value)}
                className="px-3 py-2 rounded-lg bg-gray-100 text-sm border-0 focus:ring-2 focus:ring-[#ff7e5d]"
              />

              <select
                value={statusFilter}
                onChange={(event) => setStatusFilter(event.target.value as StatusFilter)}
                className="px-3 py-2 rounded-lg bg-gray-100 text-sm border-0 focus:ring-2 focus:ring-[#ff7e5d]"
              >
                <option value="all">全部状态</option>
                <option value="available">可购</option>
                <option value="sold">已售</option>
                <option value="collection">珍藏</option>
              </select>

              <select
                value={sortMode}
                onChange={(event) => setSortMode(event.target.value as SortMode)}
                className="px-3 py-2 rounded-lg bg-gray-100 text-sm border-0 focus:ring-2 focus:ring-[#ff7e5d]"
              >
                <option value="newest">最新入藏</option>
                <option value="price-asc">价格从低到高</option>
                <option value="price-desc">价格从高到低</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "grid"
                    ? "bg-[#ff7e5d] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                网格
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "list"
                    ? "bg-[#ff7e5d] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                列表
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredItems.length > 0 ? (
          <div
            className={`grid gap-6 ${
              viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"
            }`}
          >
            {filteredItems.map((item) => (
              <CollectionCard
                key={item.id}
                item={item}
                isFavorite={favorites.includes(item.id)}
                onToggleFavorite={() => toggleFavorite(item.id)}
                showPrice
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
              <span className="text-3xl text-gray-400">🔎</span>
            </div>
            <h3 className="text-xl font-semibold text-dark mb-2">暂无符合条件的藏品</h3>
            <p className="text-gray-500">请尝试调整筛选条件</p>
          </div>
        )}
      </div>
    </div>
  );
}
