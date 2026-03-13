# 网上小猪博物馆（源码重建版）

这个项目已经从单个打包文件拆成可维护的 `src/` 结构。

## 当前结构

- `src/`：重建后的可维护源码（React + Vite）
- `images/`：图片资源目录
- `assets/index-BMF5KAk6.css`：样式文件（沿用原站）
- `index.snapshot.html` + `assets/index--0pCrA-i.js`：原始快照入口与打包 JS（保留备份）

## 启动源码项目

```bash
npm install
npm run dev
```

默认访问地址通常是：`http://127.0.0.1:5173`

另外，`index.html` 已做兼容回退：

- 用 `npm run dev` 时优先加载 `src` 源码。
- 用 `python3 -m http.server 8080` 这类静态服务时，会自动回退到保留的 bundle 版本。

## 主要源码入口

- `src/main.tsx`
- `src/App.tsx`
- `src/contexts/AppContext.tsx`
- `src/data/mockData.ts`

## 图片添加和修改

### 1) 图片文件位置

统一放在 `images/` 目录。

### 2) 展品图片路径

在 `src/data/mockData.ts` 的 `items` 数组里改每个展品的：

- `images: ["/images/xxx.png"]`

### 3) Logo 路径

在这些组件里改：

- `src/components/Navbar.tsx`
- `src/components/Footer.tsx`
- `src/pages/HomePage.tsx`
- `src/pages/admin/LoginPage.tsx`
- `src/pages/AboutPage.tsx`

## 说明

- 这是基于线上打包产物做的“结构化重建”，目标是后续可维护。
- 原站未暴露 `source map`，所以无法 1:1 还原所有原始开发文件与注释。
