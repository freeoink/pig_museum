import { Link } from "react-router-dom";
import type { MuseumItem } from "../types";

type Props = {
  item: MuseumItem;
  isFavorite: boolean;
  onToggleFavorite: () => void;
  showPrice?: boolean;
};

export default function CollectionCard({ item, isFavorite, onToggleFavorite, showPrice = false }: Props) {
  const badge = (() => {
    if (item.status === "available") {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 border border-green-200">
          可购
        </span>
      );
    }

    if (item.status === "sold") {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-500 border border-gray-200">
          已售
        </span>
      );
    }

    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-700 border border-amber-200">
        珍藏
      </span>
    );
  })();

  return (
    <div className="collection-card group hover-lift relative">
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <Link to={`/item/${item.id}`}>
          <img
            src={item.images[0]}
            alt={item.name}
            className="item-image w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
          />
        </Link>

        <div className="absolute top-3 left-3">{badge}</div>

        {item.isNew ? (
          <div className="absolute top-3 right-3">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-[#6B3E26] text-white">
              新品
            </span>
          </div>
        ) : null}

        <button
          onClick={(event) => {
            event.preventDefault();
            onToggleFavorite();
          }}
          className={`absolute bottom-3 right-3 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
            isFavorite ? "bg-[#6B3E26] text-white" : "bg-white/90 text-gray-400 hover:text-[#6B3E26]"
          }`}
          title="收藏"
        >
          <span className={isFavorite ? "scale-110" : ""}>♥</span>
        </button>

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
          <Link
            to={`/item/${item.id}`}
            className="px-6 py-2 bg-white text-dark rounded-full font-medium text-sm hover:bg-[#6B3E26] hover:text-white transition-colors"
          >
            查看详情
          </Link>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <Link to={`/item/${item.id}`}>
            <h3 className="font-semibold text-dark group-hover:text-[#6B3E26] transition-colors line-clamp-1">
              {item.name}
            </h3>
          </Link>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
          <span>{item.country}</span>
          <span>·</span>
          <span>{item.era}</span>
          <span>·</span>
          <span>{item.material}</span>
        </div>

        <p className="text-sm text-gray-600 line-clamp-2 mb-4">{item.description}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {item.tags.slice(0, 3).map((tag, index) => (
            <span key={`${tag}-${index}`} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          {showPrice && item.status === "available" ? (
            <div className="flex items-baseline gap-1">
              <span className="text-xs text-gray-500">¥</span>
              <span className="text-xl font-bold text-[#6B3E26]">{item.price}</span>
            </div>
          ) : (
            <div />
          )}

          {item.status === "available" ? (
            <button className="flex items-center gap-2 text-sm font-medium text-[#6B3E26] hover:text-[#5C3317] transition-colors">
              购买
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
