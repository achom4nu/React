import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "./index.css";

//npm run dev para encender el server

//Aquí en vez de crear una variable root y después renderizarla, lo hace todo en una misma línea
ReactDOM.createRoot(document.getElementById("root")).render(
  //Esto es declarativo, no imperativo, queremos mostrar algo, no que lo cree
  <>
    <App />
  </>
);


