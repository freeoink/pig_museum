import { useAppContext } from "../../contexts/AppContext";

export default function Dashboard() {
  const { items, orders, messages } = useAppContext();

  const cards = [
    { label: "展品总数", value: items.length },
    { label: "订单总数", value: orders.length },
    { label: "待回复留言", value: messages.filter((m) => !m.isReplied).length }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-4">
      {cards.map((card) => (
        <div key={card.label} className="bg-white rounded-xl border border-gray-100 p-5">
          <p className="text-gray-500 text-sm">{card.label}</p>
          <p className="text-3xl font-bold text-dark mt-2">{card.value}</p>
        </div>
      ))}
    </div>
  );
}
