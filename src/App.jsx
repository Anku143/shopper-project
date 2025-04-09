import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './page/Shop';
import ShopCategory from './page/ShopCategory';
import Product from './page/Product';
import Cart from './page/Cart';
import LoginSignup from './page/LoginSignup';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory />} />
          <Route path="/womans" element={<ShopCategory />} />
          <Route path="/kids" element={<ShopCategory />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
