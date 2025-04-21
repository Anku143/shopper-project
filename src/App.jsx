import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./page/Shop";
import ShopCategory from "./page/ShopCategory";
import Product from "./page/Product";
import Cart from "./page/Cart";
import LoginSignup from "./page/LoginSignup";
import Error from "./page/Error";
import Company from "./components/Company/Company";
import Footer from "./components/Footer/Footer";
import men_banner from "./assets/mens.png";
import women_banner from "./assets/women.png";
import kid_banner from "./assets/kids.png";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={<ShopCategory banner={men_banner} category="mens" />}
          />
          <Route
            path="/womans"
            element={<ShopCategory banner={women_banner} category="womens" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kid_banner} category="kids" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="*" element={<Error />} />
          <Route path="/company" element={<Company />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
