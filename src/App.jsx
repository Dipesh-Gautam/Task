import "./App.css";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WatchList from "./components/WatchList";
import Watched from "./components/Watched";
import Watching from "./components/Watching";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/WatchList" element={<WatchList />} />
          <Route path="/Watched" element={<Watched />} />
          <Route path="/Watching" element={<Watching />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
