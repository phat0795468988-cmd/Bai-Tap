import Header from "./components/Header/Header";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Products from "./components/Products/Products";
import Wishlist from "./components/Wishlist/Wishlist";
import PageMain from "./components/PageMain/PageMain";
import Detail from "./components/Products/Detail";
import Category from "./components/Category/Category";
import Cart from "./components/cartShop/Cart";
import Login from "./components/Login & Register/Login";
import Register from "./components/Login & Register/Register";
import Payment from "./components/Payment/Payment";
import History from "./components/History/History";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<PageMain />} />
        <Route path="/products" element={<Products />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/product/:id" element={<Detail />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="category/:category" element={<Category />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
         <Route path="/history" element={<History />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
