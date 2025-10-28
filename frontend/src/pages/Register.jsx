import React, { useState } from "react";
import { registerUser } from "../api/api";
import { useNavigate } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await registerUser(formData);

    if (data.user) {
      setMessage("✅ Registration successful! Redirecting to login...");
      setTimeout(() => navigate("/"), 1500);
    } else {
      setMessage(data.message || "❌ Registration failed");
    }
  };

  const loginRedirect = () => navigate("/");

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 w-[360px] shadow-2xl text-white">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          📝 Create an Account
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleChange}
            className="p-3 rounded-md bg-white/20 placeholder-gray-300 text-white outline-none focus:ring-2 focus:ring-red-500"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 rounded-md bg-white/20 placeholder-gray-300 text-white outline-none focus:ring-2 focus:ring-red-500"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            className="p-3 rounded-md bg-white/20 placeholder-gray-300 text-white outline-none focus:ring-2 focus:ring-red-500"
            required
          />

          <button
            type="submit"
            className="mt-2 bg-red-500 hover:bg-red-600 transition duration-200 text-white font-semibold py-2 rounded-md"
          >
            Register
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-gray-300 text-sm">Already have an account?</p>
          <button
            onClick={loginRedirect}
            className="text-red-400 hover:text-red-300 font-medium mt-1"
          >
            Login here
          </button>
        </div>

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

export default Register;
