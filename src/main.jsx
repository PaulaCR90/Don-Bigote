import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import PageAsociacion from "./pages/PageAsociacion.jsx";
import Donar from "./pages/Donar.jsx";
import Contacto from "./pages/Contacto.jsx";
import Colabora from "./pages/Colabora.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/Asociacion" element={<PageAsociacion />} />
          <Route path="/Colabora" element={<Colabora />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Donar" element={<Donar />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
