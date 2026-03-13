import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  const links = {
    explore: [
      { label: "镇馆之宝", path: "/category/treasure" },
      { label: "古董收藏", path: "/category/antique" },
      { label: "当代艺术", path: "/category/contemporary" },
      { label: "断舍离市集", path: "/market" }
    ],
    about: [
      { label: "关于我们", path: "/about" },
      { label: "馆长故事", path: "/about#story" },
      { label: "入藏标准", path: "/about#standards" },
      { label: "交易规则", path: "/about#rules" }
    ],
    support: [
      { label: "常见问题", path: "/about#faq" },
      { label: "联系我们", path: "/about#contact" },
      { label: "隐私政策", path: "/about#privacy" },
      { label: "服务条款", path: "/about#terms" }
    ]
  };

  return (
    <footer className="bg-[#5C3317] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center mb-6">
              <img
                src="/images/logo-footer.png?v=2"
                alt="小猪博物馆"
                className="h-8 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>

            <p className="text-gray-300 mb-6 max-w-sm">
              收藏、分享与发现独特猪主题艺术品的趣味所在。我们致力于打造一个温暖的数字博物馆，让每一件藏品都能找到欣赏它的人。
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <span className="text-[#D4A574]">✉</span>
                <span>contact@oink.com.cn</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <span className="text-[#D4A574]">☎</span>
                <span>400-888-8888</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <span className="text-[#D4A574]">⌂</span>
                <span>中国·上海</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">探索</h3>
            <ul className="space-y-3">
              {links.explore.map((item) => (
                <li key={item.label}>
                  <Link to={item.path} className="text-gray-300 hover:text-[#D4A574] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">关于</h3>
            <ul className="space-y-3">
              {links.about.map((item) => (
                <li key={item.label}>
                  <Link to={item.path} className="text-gray-300 hover:text-[#D4A574] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">支持</h3>
            <ul className="space-y-3">
              {links.support.map((item) => (
                <li key={item.label}>
                  <Link to={item.path} className="text-gray-300 hover:text-[#D4A574] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-300">© {year} 网上小猪博物馆. 保留所有权利。</p>
          <div className="flex items-center gap-4 text-sm text-gray-300">
            <span>沪ICP备2024000000号</span>
            <span>沪公网安备31000000000000号</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
