import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import HomeDecoration from "./components/HomeDecoration";
import KitchenAccessories from "./components/KitchenAccessories";
import Container from "@mui/material/Container";
import Furniture from "./components/Furniture";

function App() {
    return (
        <>
            <Header title="Fake Store" />
            <Navbar />
            <Container>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/furniture" element={<Furniture />} />
                    <Route path="/home-decoration" element={<HomeDecoration />} />
                    <Route path="/kitchen-accessories" element={<KitchenAccessories />} />
                </Routes>
            </Container>
        </>
    );
}

export default App;
