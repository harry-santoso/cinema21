import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="movie/:id" element={<h1>Movie detail page</h1>} />
          <Route path="movies/:type" element={<h1>Movies list page</h1>} />
          <Route path="/*" element={<h1>Error Page</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
