import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import BikesList from "./Components/BikesList/BikesList";
import AboutUs from "./Components/AboutUs/AboutUs";
import Footer from "./Components/Footer/Footer";
import Poster from "./Components/Poster/Poster";
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/Checkout/Checkout";
import Complete from "./Components/Complete/Complete";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/complete" element={<Complete />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Home = () => {
  return (
    <div>
      <Header />
      <Poster />
      <BikesList />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default App;
