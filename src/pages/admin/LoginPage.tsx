import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../contexts/AppContext";
import { asset } from "../../utils/asset";

export default function LoginPage() {
  const { login, isAdminLoggedIn } = useAppContext();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (isAdminLoggedIn) {
    navigate("/admin/items", { replace: true });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#6B3E26] to-[#5C3317] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="mx-auto mb-4 inline-block">
            <img src={asset("/images/logo-login.png?v=2")} alt="小猪博物馆" className="h-14 w-auto object-contain" />
          </div>
          <h1 className="text-2xl font-bold text-white">小猪博物馆</h1>
          <p className="text-white/80">后台管理系统</p>
        </div>

        <form
          className="bg-white rounded-2xl shadow-2xl p-8 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            const ok = login(username, password);
            if (ok) {
              navigate("/admin/items", { replace: true });
            } else {
              setError("用户名或密码错误");
            }
          }}
        >
          <div>
            <label className="block text-sm text-gray-600 mb-1">用户名</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-200"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">密码</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-200"
            />
          </div>

          {error ? <p className="text-sm text-red-600">{error}</p> : null}

          <button className="w-full py-2 rounded-lg bg-[#6B3E26] text-white">登录</button>
        </form>
      </div>
    </div>
  );
}
