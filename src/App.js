import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./static/css/style.css";
import Header from "./components/common/Header";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Footer from "./components/common/Footer";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import Notification from "./pages/Notification";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Address from "./pages/Address";
import OrderLocation from "./pages/OrderLocation";
import OrderHistory from "./pages/OrderHistory";
import Profile from './pages/Profile';
import ProfileSettings from "./pages/ProfileSettings";
import HelpAndSupport from "./pages/HelpAndSupport";
import EdtitProfile from "./pages/EdtitProfile";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/notification" element={<Notification />} />
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/info" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/address" element={<Address />} />
          <Route path="/order-location" element={<OrderLocation />} />
          <Route path="/orders" element={<OrderHistory />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit-profile" element={<EdtitProfile />} />
          <Route path="/profile/settings" element={<ProfileSettings />} />
          <Route path="/profile/help-and-support" element={<HelpAndSupport />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
