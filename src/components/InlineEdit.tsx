import { useState } from "react";

type Props = {
  value: string;
  onSave: (next: string) => void;
  className?: string;
};

export default function InlineEdit({ value, onSave, className = "" }: Props) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(value);

  if (!editing) {
    return (
      <button
        className={`text-left hover:bg-gray-100 rounded px-1 py-0.5 ${className}`}
        onClick={() => setEditing(true)}
        title="点击编辑"
      >
        {value}
      </button>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <input
        className={`px-2 py-1 border border-gray-200 rounded ${className}`}
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
      />
      <button
        className="text-xs px-2 py-1 rounded bg-[#6B3E26] text-white"
        onClick={() => {
          onSave(draft);
          setEditing(false);
        }}
      >
        保存
      </button>
      <button
        className="text-xs px-2 py-1 rounded border border-gray-200"
        onClick={() => {
          setDraft(value);
          setEditing(false);
        }}
      >
        取消
      </button>
    </div>
  );
}
