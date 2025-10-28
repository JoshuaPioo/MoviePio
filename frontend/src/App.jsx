import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";

function App() {
  const [token, setToken] = useState(() => localStorage.getItem("token"));

  // Whenever token changes, update localStorage
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  return (
    <Routes>
      {/* If not logged in → show Login page */}
      <Route
        path="/"
        element={!token ? <Login setToken={setToken} /> : <Navigate to="/home" replace />}
      />

      {/* If logged in → show Home, else redirect */}
      <Route
        path="/home"
        element={token ? <Home /> : <Navigate to="/" replace />}
      />

      {/* Register page is always accessible */}
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
