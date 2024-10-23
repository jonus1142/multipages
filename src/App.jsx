import { useEffect, useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Layout from "./layouts/Layout/Layout";

import Home from "./pages/Home/Home";
import Calculator from "./pages/Calculator/Calculator";
import Component from "./pages/Component/Component";
import Animation from "./pages/Animation/Animation";
import Todo from "./pages/Todo/Todo";
import Product from "./pages/Products/Product";
import Cart from "./pages/Carts/Cart";
import Login from "./pages/Login/Login";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./App.css";
import { fetchProducts } from "./data/products";

const initPage = "home";

function App() {
  const [token, setToken] = useState("x");

  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    setProducts(fetchProducts());
  }, []);

  useEffect(() => {
    console.log(products);
  }, [products]);

  const [tab, setTab] = useState("");

  useEffect(() => {
    setTab(initPage);
  }, []); // only in first loaded

  if (token === "") {
    return <Login setToken={setToken} />;
  } else {
    return (
      <div className="app-container">
        <HashRouter>
          <Routes>
            <Route
              element={
                <Layout
                  tab={tab}
                  setTab={setTab}
                  products={products}
                  carts={carts}
                  setToken={setToken}
                />
              }
            >
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/calculator" element={<Calculator />} />
              <Route path="/component" element={<Component />} />
              <Route path="/animation" element={<Animation />} />
              <Route path="/todo" element={<Todo />} />
              <Route
                path="/product"
                element={
                  <Product
                    products={products}
                    carts={carts}
                    setCarts={setCarts}
                  />
                }
              />
              <Route
                path="/cart"
                element={<Cart carts={carts} setCarts={setCarts} />}
              />
            </Route>
          </Routes>
        </HashRouter>
      </div>
    );
  }
}

export default App;
