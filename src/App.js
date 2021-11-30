import "./App.css";
import Home from "./Pages/Home/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./Pages/Projects/Projects";
import Blogs from "./Pages/Home/Blogs/Blogs";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="/blog" element={<Blogs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
