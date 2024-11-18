import { Route, Routes } from "react-router-dom";
import "./App.styled.js";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Favourites from "./pages/Favourites";
import { Container } from "./App.styled.js";
import AppBar from "./components/AppBar/AppBar.jsx";

function App() {
  return (
    <Container>
      <AppBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />}></Route>
        <Route path="/favorites" element={<Favourites />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Container>
  );
}

export default App;
