import { useState } from "react";
import { useAppContext } from "../../contexts/AppContext";

export default function MessagesPage() {
  const { messages, replyMessage, toggleMessageReplied, deleteMessage } = useAppContext();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [reply, setReply] = useState("");

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-dark">留言管理</h2>

      <div className="space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className="bg-white rounded-xl border border-gray-100 p-5 space-y-3">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-medium text-dark">{msg.name}</p>
                <p className="text-sm text-gray-500">{msg.email}</p>
              </div>
              <div className="text-sm text-gray-400">{msg.createdAt}</div>
            </div>

            <p className="text-gray-700">{msg.content}</p>

            {msg.isReplied && msg.reply ? (
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-sm text-[#6B3E26] mb-1">馆长回复</p>
                <p className="text-gray-700">{msg.reply}</p>
              </div>
            ) : null}

            {editingId === msg.id ? (
              <div className="space-y-2">
                <textarea
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg"
                  value={reply}
                  onChange={(e) => setReply(e.target.value)}
                  placeholder="输入回复"
                />
                <div className="flex items-center gap-2">
                  <button
                    className="px-3 py-2 rounded-lg bg-[#6B3E26] text-white"
                    onClick={() => {
                      if (!reply.trim()) return;
                      replyMessage(msg.id, reply.trim());
                      setEditingId(null);
                      setReply("");
                    }}
                  >
                    保存回复
                  </button>
                  <button
                    className="px-3 py-2 rounded-lg border border-gray-200"
                    onClick={() => {
                      setEditingId(null);
                      setReply("");
                    }}
                  >
                    取消
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  className="px-2 py-1 rounded bg-[#6B3E26]/10 text-[#6B3E26]"
                  onClick={() => {
                    setEditingId(msg.id);
                    setReply(msg.reply ?? "");
                  }}
                >
                  {msg.isReplied ? "编辑回复" : "回复"}
                </button>
                <button
                  className="px-2 py-1 rounded border border-gray-200"
                  onClick={() => toggleMessageReplied(msg.id)}
                >
                  {msg.isReplied ? "标记未回复" : "标记已回复"}
                </button>
                <button
                  className="px-2 py-1 rounded bg-red-50 text-red-600"
                  onClick={() => deleteMessage(msg.id)}
                >
                  删除
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
