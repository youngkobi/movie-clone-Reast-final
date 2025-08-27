import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
import Movie from "./pages/Movie";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div>
        <Routes>

            <Route path="/" element={<Home/>}/>
            <Route path="/search" element={<Search/>}/>
            <Route path=":id" element={<Movie />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
