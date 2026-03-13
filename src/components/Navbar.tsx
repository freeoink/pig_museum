import { Link, NavLink, useLocation } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";

const navItems = [
  { path: "/", label: "首页" },
  { path: "/category/treasure", label: "镇馆之宝" },
  { path: "/category/antique", label: "古董收藏" },
  { path: "/category/contemporary", label: "当代艺术" },
  { path: "/category/folk", label: "民俗民艺" },
  { path: "/market", label: "断舍离市集" },
  { path: "/about", label: "关于我们" }
];

export default function Navbar() {
  const { favorites } = useAppContext();
  const location = useLocation();

  const isActivePath = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-40 w-full">
      <nav className="glass-effect border-b border-[#6B3E26]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center group">
              <img
                src="/images/logo.png?v=2"
                alt="小猪博物馆"
                className="h-7 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActivePath(item.path)
                      ? "text-[#6B3E26] bg-[#6B3E26]/10"
                      : "text-gray-600 hover:text-[#6B3E26] hover:bg-gray-100"
                  }`}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <Link
                to="/favorites"
                className="relative p-2 rounded-lg text-gray-600 hover:text-[#6B3E26] hover:bg-gray-100 transition-all"
                title="收藏"
              >
                ♡
                {favorites.length > 0 ? (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#6B3E26] text-white text-xs rounded-full flex items-center justify-center">
                    {favorites.length}
                  </span>
                ) : null}
              </Link>

              <Link
                to="/admin/login"
                className="px-3 py-2 rounded-lg text-sm text-gray-600 hover:text-[#6B3E26] hover:bg-gray-100"
              >
                管理
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
