import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Footer from "./components/Footer";

export default function App() {
  const [page, setPage] = useState("Home");

  return (
    <div className="app-container mx-auto">
      <Navbar setPage={setPage} />

      <div className="content-box mt-4">
        {page === "Home" && <Home />}
        {page === "About" && <About />}
        {page === "Project" && <Project />}
      </div>

      <Footer />
    </div>
  );
}
