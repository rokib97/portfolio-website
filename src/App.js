import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="max-w-7xl mx-auto scroll-smooth">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
