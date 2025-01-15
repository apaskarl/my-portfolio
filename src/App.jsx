import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { setThemeOnLoad } from "./utils/theme";

function App() {
  useEffect(() => {
    setThemeOnLoad();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
