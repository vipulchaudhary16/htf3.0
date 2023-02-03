import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/nav/Navbar";
import Provider from "./components/Provider/Provider";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/providers/:name" element={<Provider />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
