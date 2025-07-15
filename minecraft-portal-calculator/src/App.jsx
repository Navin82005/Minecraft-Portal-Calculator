import { invoke } from "@tauri-apps/api/core";

// ROUTER
import { HashRouter } from "react-router-dom";

// HOOKS
import { useState } from "react";

// CSS
import "./App.css";

// PAGES
import Calculator from "./Calculator";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <HashRouter>
      <main className="container" >
      </main>
      <Calculator />
    </HashRouter>
  );
}

export default App;
