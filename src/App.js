// import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Shop from "./Components/Shop/Shop";
import Orders from "./Components/Orders/Orders";
import Inventory from "./Components/Inventory/Inventory";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/inventory" element={<Inventory />} />
        {/* <Route path="*" element={} */}
      </Routes>
    </div>
  );
}

export default App;
