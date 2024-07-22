import Footer from "./components/Footer"
import NavBar from "./components/NavBar.jsx";
import ItemListConteiner from "./components/ItemListConteiner.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nosotros from "./components/Nosotros.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import Carrito from "./components/Carrito.jsx";
import Checkout from "./components/Checkout.jsx";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListConteiner />} />
          <Route path="/category" element={<ItemListConteiner />} />
          <Route path="/category/:genre" element={<ItemListConteiner />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Carrito" element={<Carrito />} />
          <Route path="/Checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App;