import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
import Movie from "./pages/Movie";
import Home from "./pages/Home";
import Navbar from "./components/navbar";


function App() {
  return (
   
    <Router>
       <Navbar />
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
