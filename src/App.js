import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './pages/menu'; // Import the Menu component
import Main from "./pages/main";
import Orders from "./pages/orders"
//import Navbar from "./pages/components/Navbar"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="menu" element={<Menu />} />
        <Route path="orders" element={<Orders />} />
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;
