import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CollectionCard from "../components/CollectionCard";
import { useAppContext } from "../contexts/AppContext";

export default function ItemDetailPage() {
  const { itemId } = useParams();
  const { items, categories, favorites, toggleFavorite } = useAppContext();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const item = items.find((entry) => entry.id === itemId);

  const related = useMemo(() => {
    if (!item) return [];
    return items.filter((entry) => entry.category === item.category && entry.id !== item.id).slice(0, 4);
  }, [items, item]);

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-dark mb-4">展品不存在</h2>
          <Link to="/" className="text-[#ff7e5d] hover:underline">
            返回首页
          </Link>
        </div>
      </div>
    );
  }

  const category = categories.find((entry) => entry.id === item.category);
  const images = item.images?.length ? item.images : ["/images/hero-pig.png"];
  const currentImage = images[Math.min(activeImageIndex, images.length - 1)];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <Link to="/" className="flex items-center">
            <img src="/images/logo.png?v=2" alt="小猪博物馆" className="h-7 w-auto object-contain" />
          </Link>
        </div>
      </div>

      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-[#6B3E26]">
              首页
            </Link>
            <span className="w-4 h-4 text-gray-400">›</span>
            <Link to={`/category/${item.category}`} className="text-gray-500 hover:text-[#6B3E26]">
              {category?.name || "藏品"}
            </Link>
            <span className="w-4 h-4 text-gray-400">›</span>
            <span className="text-dark font-medium truncate">{item.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="relative aspect-square bg-white rounded-2xl overflow-hidden group shadow-sm">
              <img src={currentImage} alt={item.name} className="item-image w-full h-full object-contain p-8" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
              <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-black/60 text-white text-sm rounded-full">
                {activeImageIndex + 1} / {images.length}
              </div>
              <div className="absolute top-4 left-4">
                {item.status === "available" ? (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 border border-green-200">
                    可购
                  </span>
                ) : item.status === "sold" ? (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-500 border border-gray-200">
                    已售
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-700 border border-amber-200">
                    珍藏
                  </span>
                )}
              </div>

              {item.isNew ? (
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium bg-[#6B3E26] text-white">
                    新品
                  </span>
                </div>
              ) : null}
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-gray-500">共 {images.length} 张图片</span>
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-2">
                {images.map((image, index) => (
                  <button
                    key={image + index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      activeImageIndex === index
                        ? "border-[#6B3E26] ring-2 ring-[#6B3E26]/20"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <img src={image} alt={`${item.name}-${index + 1}`} className="item-image w-full h-full object-contain bg-gray-50 p-1" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h1 className="heading-2 text-dark mb-2">{item.name}</h1>
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <span>{item.country}</span>
                  <span>·</span>
                  <span>{item.era}</span>
                  <span>·</span>
                  <span>{item.material}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => toggleFavorite(item.id)}
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                    favorites.includes(item.id)
                      ? "bg-[#6B3E26] text-white"
                      : "bg-gray-100 text-gray-400 hover:text-[#6B3E26]"
                  }`}
                >
                  ♥
                </button>
              </div>
            </div>

            {item.status === "available" ? (
              <div className="flex items-baseline gap-2 py-4 border-y border-gray-200">
                <span className="text-sm text-gray-500">售价</span>
                <span className="text-3xl font-bold text-[#6B3E26]">¥{item.price}</span>
              </div>
            ) : null}

            <div>
              <h3 className="font-semibold text-dark mb-3">藏品说明</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                <div>
                  <p className="text-xs text-gray-500">入藏日期</p>
                  <p className="font-medium text-dark">{item.collectionDate}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag, index) => (
                <span key={tag + index} className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            {item.story ? (
              <div className="bg-[#6B3E26]/5 border border-[#6B3E26]/10 rounded-xl p-4">
                <h3 className="font-semibold text-dark mb-2">藏品故事</h3>
                <p className="text-gray-600 leading-relaxed">{item.story}</p>
              </div>
            ) : null}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="heading-2 text-dark mb-6">同类推荐</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {related.map((entry) => (
              <CollectionCard
                key={entry.id}
                item={entry}
                isFavorite={favorites.includes(entry.id)}
                onToggleFavorite={() => toggleFavorite(entry.id)}
                showPrice
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
