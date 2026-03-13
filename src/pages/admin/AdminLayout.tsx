import { Navigate, NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAppContext } from "../../contexts/AppContext";

const links = [
  { to: "/admin/items", label: "展品" },
  { to: "/admin/orders", label: "订单" },
  { to: "/admin/messages", label: "留言" },
  { to: "/admin/settings", label: "设置" }
];

export default function AdminLayout() {
  const { isAdminLoggedIn, logout } = useAppContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/"); // 退出后跳转到首页
  };

  if (!isAdminLoggedIn) {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <header className="bg-white border-b border-gray-100 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/images/logo.png?v=2" alt="小猪博物馆" className="h-7 w-auto" />
            <span className="font-semibold text-dark">后台管理</span>
          </div>

          <nav className="flex items-center gap-1">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-sm ${
                    isActive ? "bg-[#6B3E26]/10 text-[#6B3E26]" : "text-gray-600 hover:bg-gray-100"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <button
            onClick={handleLogout}
            className="px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-100"
          >
            退出
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
    </div>
  );
}
