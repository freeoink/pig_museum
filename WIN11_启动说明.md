# 网上小猪博物馆 - Win11 启动说明

## 1. 环境要求

- 操作系统：Windows 11 x64
- Node.js：建议 `20.x LTS`（最低建议 `>=18`）
- npm：随 Node.js 安装（建议 `>=9`）
- 浏览器：Chrome / Edge 最新版

## 2. 项目技术栈

- React `18.3.1`
- React DOM `18.3.1`
- React Router DOM `6.28.1`
- Vite `6.0.1`
- TypeScript `5.7.2`

## 3. 从零启动（源码开发模式）

### 3.1 安装 Node.js

1. 打开官网：`https://nodejs.org/`
2. 下载并安装 **LTS** 版本（建议 20.x）
3. 安装完成后打开 PowerShell，检查：

```bash
node -v
npm -v
```

能看到版本号即成功。

### 3.2 打开项目

1. 把项目文件夹拷贝到本地（例如 `D:\projects\pig_web`）
2. 在项目目录打开 PowerShell（资源管理器地址栏输入 `powershell` 回车）

### 3.3 安装依赖并启动

```bash
npm install
npm run dev
```

启动成功后会显示本地地址，默认通常是：

- `http://127.0.0.1:5173`

在浏览器打开即可。



