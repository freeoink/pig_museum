import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import type { Category } from "../types";

type Props = {
  categories?: Category[];
};

const iconByName: Record<string, string> = {
  treasure: "👑",
  antique: "🏺",
  contemporary: "🎨",
  folk: "❤️",
  western: "🌍",
  japanese: "🌸",
  wall: "🖼️"
};

export default function CategoryAccordion({ categories }: Props) {
  const { categories: contextCategories } = useAppContext();
  const list = categories ?? contextCategories;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col lg:flex-row gap-2 h-auto lg:h-[500px]">
      {list.map((category, index) => {
        const active = activeIndex === index;

        return (
          <div
            key={category.id}
            className={`relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-700 ease-out ${
              active ? "lg:flex-[3] flex-auto" : "lg:flex-1 flex-auto"
            }`}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <div
              className={`absolute inset-0 transition-all duration-500 ${
                active
                  ? "bg-gradient-to-br from-[#6B3E26] to-[#8B5A3C]"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            />

            <div className="relative h-full min-h-[120px] lg:min-h-0 p-6 flex flex-col justify-between">
              <div className={`transition-all duration-500 ${active ? "" : "lg:writing-vertical lg:rotate-180"}`}>
                <div className={`flex items-center gap-3 mb-2 ${active ? "" : "lg:flex-col lg:items-start"}`}>
                  <span className={`text-2xl ${active ? "text-white" : ""}`}>{iconByName[category.id] ?? "🐷"}</span>
                  <h3 className={`text-xl font-bold transition-colors ${active ? "text-white" : "text-dark"}`}>
                    {category.name}
                  </h3>
                </div>
              </div>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  active ? "opacity-100 max-h-96" : "opacity-0 max-h-0 lg:max-h-0"
                }`}
              >
                <p className="text-white/80 mb-6 max-w-md">{category.description}</p>
                <Link
                  to={`/category/${category.id}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#6B3E26] rounded-xl font-medium hover:bg-white/90 transition-colors"
                >
                  浏览藏品
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
