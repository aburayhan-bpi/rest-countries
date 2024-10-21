import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Countries from "./Components/Countries/Countries";
import Country from "./Components/Country/Country";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Countries></Countries>
    </>
  );
}

export default App;
