import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Catalog from "./components/catalog/Catalog";
import Item from "./components/item/Item"; 
import { CarsProvider } from "./context/CarsContext"; 

function App() {
  return (
    <CarsProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/catalog/:id" element={<Item />} />
          </Routes>
          <Footer />
        </BrowserRouter>
    </CarsProvider>
  );
}

export default App;