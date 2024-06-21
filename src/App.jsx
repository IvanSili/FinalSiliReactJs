import Main from "./components/Main.jsx";
import Footer from "./components/Footer"
import NavBar from "./components/NavBar.jsx";
import ItemListConteiner from "./components/ItemListConteiner.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
                <Route path="/" element={<ItemListConteiner/>}/>
                <Route path="/category" element={<ItemListConteiner/>}/>
                <Route path="/category/:genres" element={<ItemListConteiner/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer />}/>
            </Routes>
            <Main/>
      <Footer/>
    </BrowserRouter>
    )
}

export default App; 