import { useAppContext } from "../../contexts/AppContext";
import type { OrderStatus } from "../../types";

const statuses: OrderStatus[] = ["pending", "paid", "shipped", "completed", "cancelled"];

export default function OrdersPage() {
  const { orders, updateOrderStatus } = useAppContext();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-dark">订单管理</h2>

      <div className="overflow-auto bg-white border border-gray-100 rounded-xl">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left p-3">订单号</th>
              <th className="text-left p-3">展品</th>
              <th className="text-left p-3">买家</th>
              <th className="text-left p-3">金额</th>
              <th className="text-left p-3">状态</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-t border-gray-100">
                <td className="p-3">{order.id}</td>
                <td className="p-3">{order.itemName}</td>
                <td className="p-3">{order.buyerName}</td>
                <td className="p-3">¥{order.price}</td>
                <td className="p-3">
                  <select
                    value={order.status}
                    onChange={(e) => updateOrderStatus(order.id, e.target.value as OrderStatus)}
                    className="px-2 py-1 border border-gray-200 rounded"
                  >
                    {statuses.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
