import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1
        className="text-3xl font-bold underline 
        text-red-500
        text-center
        bg-slate-500
        p-5
        rounded-md
        shadow-md
        shadow-red-500
        hover:bg-red-500 hover:text-white
          
        
  "
      >
        hola
      </h1>
    </>
  );
}

export default App;
