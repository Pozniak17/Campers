import { Route, Routes } from "react-router-dom";
import "./App.module.js";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Favourites from "./pages/Favourites";
import { Container } from "./App.module.js";
import AppBar from "./components/AppBar/AppBar.jsx";
import CampersDetails from "./pages/CampersDetails.jsx";

function App() {
  return (
    <Container>
      <AppBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />}>
          <Route path="features" element={<div>This is features</div>} />
          <Route path="reviews" element={<div>This is reviews</div>} />
        </Route>
        <Route path="/catalog/:id" element={<CampersDetails />} />

        <Route path="/favorites" element={<Favourites />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Container>
  );
}

export default App;
