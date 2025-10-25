import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await loginUser({ email, password });

    if (data.token) {
      localStorage.setItem("token", data.token);
      setMessage("✅ Login successful!");

      // Redirect after a short delay
      setTimeout(() => navigate("/home"), 1000);
    } else {
      setMessage(data.message || "❌ Login failed");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 w-[360px] shadow-2xl text-white">
        <h2 className="text-2xl font-semibold mb-6 text-center">🎬 Movie Admin Login</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded-md bg-white/20 placeholder-gray-300 text-white outline-none focus:ring-2 focus:ring-red-500"
          />

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 rounded-md bg-white/20 placeholder-gray-300 text-white outline-none focus:ring-2 focus:ring-red-500"
          />

          <button
            type="submit"
            className="mt-2 bg-red-500 hover:bg-red-600 transition duration-200 text-white font-semibold py-2 rounded-md"
          >
            Login
          </button>
        </form>

        {message && (
          <p
            className={`mt-4 text-sm text-center ${
              message.includes("✅") ? "text-green-400" : "text-yellow-400"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default Login;
