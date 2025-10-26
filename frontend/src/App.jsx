import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();

  // Update token when it changes in localStorage
  useEffect(() => {
    const handleStorageChange = () => {
      setToken(localStorage.getItem("token"));
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // Automatically redirect when token changes
  useEffect(() => {
    if (token) {
      navigate("/home");
    } else {
      navigate("/");
    }
  }, [token, navigate]);

  return (
    <Routes>
      <Route path="/" element={!token ? <Login setToken={setToken} /> : <Navigate to="/home" replace />} />
      <Route path="/home" element={token ? <Home /> : <Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
