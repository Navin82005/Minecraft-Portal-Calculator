import { invoke } from "@tauri-apps/api/core";

// ROUTER
import { HashRouter, Routes, Route } from "react-router-dom";

// HOOKS
import { useState } from "react";

// CSS
import "./App.css";

// PAGES
import Home from "./pages/Home/Home";
import Calculator from "./pages/Calculator/Calculator";
import Coordinates from "./pages/Coordinates/Coordinates";

// COMPONENTS
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <HashRouter>
      <main className="app-container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/coordinates" element={<Coordinates />} />
        </Routes>
      </main>
    </HashRouter>
  );
}

export default App;
