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
import EditProfile from "./pages/EditProfile";
import RewardPointPage from "./pages/RewardPointPage";

import Protected from "./components/Protected";
import OrderDetails from "./pages/OrderDetails";
import Payment from "./pages/Payment";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/notification" element={<Protected Component={Notification} />} />
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/info/:id/:slug" element={<SingleProduct />} />
          {/* <Route path="/cart" element={ <Cart /> } /> */}
          <Route path="/cart" element={<Protected Component={Cart} />} />
          <Route path="/address" element={<Protected Component={Address} />} />
          <Route path="/order-location" element={<Protected Component={OrderLocation} />} />
          <Route path="/orders" element={<Protected Component={OrderHistory} />} />
          <Route path="/profile" element={<Protected Component={Profile} />} />
          <Route path="/edit-profile" element={<Protected Component={EditProfile} />} />
          <Route path="/profile/settings" element={<Protected Component={ProfileSettings} />} />
          <Route path="/profile/help-and-support" element={<HelpAndSupport />} />
          <Route path="/reward-points" element={<Protected Component={RewardPointPage} />} />
          <Route path="/place-order" element={<Protected Component={Payment} />} />
          <Route path="/order-details" element={<OrderDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
