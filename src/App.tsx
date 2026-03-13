import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import AboutPage from "./pages/AboutPage";
import CategoryPage from "./pages/CategoryPage";
import FavoritesPage from "./pages/FavoritesPage";
import HomePage from "./pages/HomePage";
import ItemDetailPage from "./pages/ItemDetailPage";
import MarketPage from "./pages/MarketPage";
import AdminLayout from "./pages/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import ItemsPage from "./pages/admin/Items";
import LoginPage from "./pages/admin/LoginPage";
import MessagesPage from "./pages/admin/Messages";
import OrdersPage from "./pages/admin/Orders";
import SettingsPage from "./pages/admin/Settings";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="category/:categoryId" element={<CategoryPage />} />
        <Route path="item/:itemId" element={<ItemDetailPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="market" element={<MarketPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
      </Route>

      <Route path="/admin/login" element={<LoginPage />} />
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="items" element={<ItemsPage />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="messages" element={<MessagesPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
