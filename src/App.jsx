import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";

function App() {
  const [tabletOrLess, setTabletOrLess] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 720) {
      setTabletOrLess(true);
    }
  }, []);
  return (
    <>
      <Header tabletOrLess={tabletOrLess} />
      <Outlet />
      <Footer tabletOrLess={tabletOrLess} />
    </>
  );
}

export default App;
