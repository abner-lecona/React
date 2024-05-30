import "./App.css";
import ListaTareas from "./components/ListaTareas";
import ProvedorTareas from "./components/ProvedorTareas";
import { createContext, useState } from "react";

export const ThemeContext = createContext(null); // Contexto global

function App() {
  const [theme, setTheme] = useState("light"); // Utiliza el contexto del tema

  const toogleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toogleTheme }}>
      <div className="App" id={theme}>
        <div className="switch-container">
          <label class="switch">
          <input type="checkbox" onClick={toogleTheme}/>
          <span class="slider round"></span>
        </label>
        </div>
        <ProvedorTareas>
          <ListaTareas />
        </ProvedorTareas>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
