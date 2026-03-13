import { useState } from "react";
import { useAppContext } from "../../contexts/AppContext";

export default function SettingsPage() {
  const { siteSettings, updateSiteSettings } = useAppContext();
  const [draft, setDraft] = useState(siteSettings);
  const [message, setMessage] = useState("");

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-dark">系统设置</h2>

      <div className="bg-white rounded-xl border border-gray-100 p-6 space-y-4 max-w-3xl">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">网站名称</label>
            <input
              className="w-full px-3 py-2 rounded-lg border border-gray-200"
              value={draft.siteName}
              onChange={(e) => setDraft({ ...draft, siteName: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">英文名称</label>
            <input
              className="w-full px-3 py-2 rounded-lg border border-gray-200"
              value={draft.siteNameEn}
              onChange={(e) => setDraft({ ...draft, siteNameEn: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">联系邮箱</label>
            <input
              className="w-full px-3 py-2 rounded-lg border border-gray-200"
              value={draft.contactEmail}
              onChange={(e) => setDraft({ ...draft, contactEmail: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">联系电话</label>
            <input
              className="w-full px-3 py-2 rounded-lg border border-gray-200"
              value={draft.contactPhone}
              onChange={(e) => setDraft({ ...draft, contactPhone: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">微信号</label>
            <input
              className="w-full px-3 py-2 rounded-lg border border-gray-200"
              value={draft.wechatId}
              onChange={(e) => setDraft({ ...draft, wechatId: e.target.value })}
            />
          </div>
        </div>

        <div className="flex items-center gap-6 text-sm">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={draft.wechatPayEnabled}
              onChange={(e) => setDraft({ ...draft, wechatPayEnabled: e.target.checked })}
            />
            微信支付
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={draft.alipayEnabled}
              onChange={(e) => setDraft({ ...draft, alipayEnabled: e.target.checked })}
            />
            支付宝
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={draft.paypalEnabled}
              onChange={(e) => setDraft({ ...draft, paypalEnabled: e.target.checked })}
            />
            PayPal
          </label>
        </div>

        <div className="flex items-center gap-2">
          <button
            className="px-4 py-2 rounded-lg bg-[#6B3E26] text-white"
            onClick={() => {
              updateSiteSettings(draft);
              setMessage("设置已保存");
            }}
          >
            保存设置
          </button>
          {message ? <span className="text-sm text-green-600">{message}</span> : null}
        </div>
      </div>
    </div>
  );
}
