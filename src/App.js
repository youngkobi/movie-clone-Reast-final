import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
import Movie from "./pages/Movie";
import Home from "./pages/Home";
import Navbar from "./components/navbar";
import { useState } from "react";


function App() {
const [searchterm, setSearchterm] = useState("")

  return (
   
    <Router>
       <Navbar />
      <div>
        <Routes>

            <Route path="/" element={<Home searchterm={searchterm} setSearchterm={setSearchterm}/>}/>
            <Route path="/search" element={<Search searchterm={searchterm} setSearchterm={setSearchterm}/>} />
            <Route path=":id" element={<Movie />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
