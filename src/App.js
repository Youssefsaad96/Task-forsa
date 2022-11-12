import React from "react";
import Mainphoto from "./Mainphoto";
import NavLink from "react-router-dom";
import "./index.css";
import Header from "./components/Header";
import "react-slideshow-image/dist/styles.css";
import Slider from "./components/Slider";
import Subscription from "./components/Subscription";
import Footer from "./components/Footer";
import ProductsSlider from "./components/ProductsSlider";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import BuyProduct from "./components/BuyProduct";
import HomePage from "./components/HomePage";
import BuyPage from "./components/BuyPage";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<HomePage />}></Route>
        <Route path="/:id" element={<BuyPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
