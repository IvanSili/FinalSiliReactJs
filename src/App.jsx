import Main from "./components/Main.jsx";
import Footer from "./components/Footer"
import NavBar from "./components/NavBar.jsx";
import ItemListConteiner from "./components/ItemListConteiner.jsx";

function App() {
  return (
    <>
      <NavBar/>
      <ItemListConteiner texto='Bienvenido a la libreria "Odisea"'/>
      <Main/>
      <Footer/>
    </>
    )
}

export default App;