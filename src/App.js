import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Checkout from "./Pages/Checkout";
import Success from "./Pages/Success";

function App() {
  return (
    <>
      <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<Success />} />
        </Routes>
    </>
  );
}

export default App;
