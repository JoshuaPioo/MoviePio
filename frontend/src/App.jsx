import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  const token = localStorage.getItem("token");

  return (
    <>
      {token ? <Home /> : <Login />}
    </>
  );
}

export default App;
