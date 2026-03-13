import CollectionCard from "../components/CollectionCard";
import { useAppContext } from "../contexts/AppContext";

export default function FavoritesPage() {
  const { items, favorites, toggleFavorite } = useAppContext();
  const favoriteItems = items.filter((item) => favorites.includes(item.id));

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-6">
          <h1 className="heading-2 text-dark">我的收藏</h1>
          <p className="text-gray-500 mt-2">你已收藏 {favoriteItems.length} 件展品</p>
        </div>

        {favoriteItems.length === 0 ? (
          <div className="bg-white rounded-2xl p-10 text-center text-gray-500 border border-gray-100">
            还没有收藏，去展馆逛逛吧。
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {favoriteItems.map((item) => (
              <CollectionCard
                key={item.id}
                item={item}
                isFavorite={favorites.includes(item.id)}
                onToggleFavorite={() => toggleFavorite(item.id)}
                showPrice
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
