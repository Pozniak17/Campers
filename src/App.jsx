import { Route, Routes } from "react-router-dom";
import "./App.module.js";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Favourites from "./pages/Favourites";
import { Header, Container, Logo, Nav, Link } from "./App.module.js";

function App() {
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="car icon">
            🚗
          </span>
          Camper Store
        </Logo>

        <Nav>
          <Link to="/">Home</Link>
          <Link to="/catalog">Catalog</Link>
          <Link to="/favorites">Favorites</Link>
        </Nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favourites />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Container>
  );
}

export default App;
