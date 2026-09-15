import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/header";
import HomePage from "./components/pages/HomePage";
import Products from "./components/pages/Products";
import ProductDetail from "./components/pages/ProductDetail";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/products" element={<Products />} />

        <Route path="/products/:id" element={<ProductDetail />} />

      </Routes>
    </>
  );
}

export default App;