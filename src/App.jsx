import "./css/App.css";
import Favorites from "./Pages/Favorites";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./componenets/navbar";
import { MovieProvider } from "./contexts/MovieContext";

// App.jsx
function App() {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </>
  );
}


export default App;
