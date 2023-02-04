import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ProviderDashboard from "./components/Admin/ProviderDashboard";
import Home from "./components/Home/Home";
import Navbar from "./components/nav/Navbar";
import Provider from "./components/Provider/Provider";
import Login from "./components/form/Login";
import Signup from "./components/form/Signup";
import Checkout from "./components/checkout/Checkout";
import Profile from "./components/Profile/Profile";
import SignUp from "./components/Admin/SignUp";
import Footer from "./components/footer/Footer";
import Error404 from "./components/Error404";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/admin" element={<ProviderDashboard />}></Route>
          <Route path="/providers/:name" element={<Provider />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/me" element={<Profile />} />
          <Route path="/signup-admin" element={<SignUp />} />
          <Route path="/checkout/:item_id" element={<Checkout/>} />
          <Route path="*" element={<Error404/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
