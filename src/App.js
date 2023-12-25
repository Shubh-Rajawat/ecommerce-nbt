import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./static/css/style.css";
import Header from "./components/common/header/Header";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Footer from "./components/common/header/Footer";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/info" element={<SingleProduct />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
