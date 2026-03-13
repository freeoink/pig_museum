import { Link } from "react-router-dom";
import CategoryAccordion from "../components/CategoryAccordion";
import CollectionCard from "../components/CollectionCard";
import { useAppContext } from "../contexts/AppContext";
import { asset } from "../utils/asset";

export default function HomePage() {
  const { categories, items, favorites, toggleFavorite } = useAppContext();
  const recommended = items.filter((item) => item.isRecommended).slice(0, 8);

  return (
    <div className="min-h-screen">
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-[#FDF8F3] via-white to-[#6B3E26]/5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-[#6B3E26]/10 animate-float" />
          <div
            className="absolute top-40 right-20 w-16 h-16 rounded-full bg-[#6B3E26]/15 animate-float"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute bottom-40 left-1/4 w-12 h-12 rounded-full bg-[#6B3E26]/20 animate-float"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute top-1/3 right-1/3 w-8 h-8 rounded-full bg-[#6B3E26]/25 animate-float"
            style={{ animationDelay: "0.5s" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="hero-text space-y-8 z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6B3E26]/10 text-[#6B3E26] text-sm font-medium">
                <span>★</span>
                <span>数字馆藏计划</span>
              </div>

              <h1 className="heading-1 text-dark">
                <span className="text-gradient-brown">网上小猪博物馆</span>
              </h1>

              <p className="body-large max-w-lg">
                收藏、分享与发现独特猪主题艺术品。每一件展品都记录着年代、工艺与故事。
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/category/treasure" className="btn-primary-brown inline-flex items-center gap-2">
                  探索镇馆之宝
                </Link>
                <Link to="/market" className="btn-secondary-brown inline-flex items-center gap-2">
                  断舍离市集
                </Link>
              </div>

              <div className="flex gap-12 pt-8 border-t border-gray-200">
                <div>
                  <p className="text-3xl font-bold text-[#6B3E26]">{items.length}</p>
                  <p className="text-sm text-gray-500">珍贵藏品</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#6B3E26]">24+</p>
                  <p className="text-sm text-gray-500">合作艺术家</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#6B3E26]">12k+</p>
                  <p className="text-sm text-gray-500">快乐访客</p>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="hero-image relative w-64 h-64 lg:w-80 lg:h-80">
                <img
                  src={asset("/images/logo-hero.png?v=2")}
                  alt="小猪博物馆"
                  className="w-full h-full object-contain animate-float"
                  style={{ filter: "drop-shadow(0 4px 12px rgba(107, 62, 38, 0.15))" }}
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#6B3E26]/10 to-transparent rounded-full blur-2xl scale-125" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400">
          <span className="text-sm">向下滚动探索更多</span>
          <div className="w-6 h-10 rounded-full border-2 border-gray-300 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-[#6B3E26] rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/category/treasure" className="group rounded-2xl p-5 bg-gray-50 hover:bg-[#6B3E26] hover:text-white transition-all">
              <p className="text-2xl mb-3">👑</p>
              <p className="font-semibold">镇馆之宝</p>
            </Link>
            <Link to="/category/contemporary" className="group rounded-2xl p-5 bg-gray-50 hover:bg-[#6B3E26] hover:text-white transition-all">
              <p className="text-2xl mb-3">🆕</p>
              <p className="font-semibold">最新入藏</p>
            </Link>
            <Link to="/market" className="group rounded-2xl p-5 bg-gray-50 hover:bg-[#6B3E26] hover:text-white transition-all">
              <p className="text-2xl mb-3">🛒</p>
              <p className="font-semibold">可购精选</p>
            </Link>
            <Link to="/about" className="group rounded-2xl p-5 bg-gray-50 hover:bg-[#6B3E26] hover:text-white transition-all">
              <p className="text-2xl mb-3">📖</p>
              <p className="font-semibold">断舍离故事</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="heading-2 text-dark mb-2">分类导览</h2>
              <p className="text-gray-600">按主题探索小猪馆藏</p>
            </div>
            <Link to="/category/treasure" className="text-[#6B3E26] hover:underline">
              查看全部分类
            </Link>
          </div>

          <CategoryAccordion categories={categories} />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="heading-2 text-dark mb-2">馆长推荐</h2>
              <p className="text-gray-600">精选值得细看的小猪艺术品</p>
            </div>
            <Link to="/market" className="text-[#6B3E26] hover:underline">
              前往市集
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {recommended.map((item) => (
              <CollectionCard
                key={item.id}
                item={item}
                isFavorite={favorites.includes(item.id)}
                onToggleFavorite={() => toggleFavorite(item.id)}
                showPrice
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
