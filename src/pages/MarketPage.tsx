import CollectionCard from "../components/CollectionCard";
import { useAppContext } from "../contexts/AppContext";

export default function MarketPage() {
  const { items, favorites, toggleFavorite } = useAppContext();
  const marketItems = items.filter((item) => item.status === "available");

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-6">
          <h1 className="heading-2 text-dark">断舍离市集</h1>
          <p className="text-gray-500 mt-2">可售展品列表</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {marketItems.map((item) => (
            <CollectionCard
              key={item.id}
              item={item}
              isFavorite={favorites.includes(item.id)}
              onToggleFavorite={() => toggleFavorite(item.id)}
              showPrice
            />
          ))}
        </div>
      </section>
    </div>
  );
}
