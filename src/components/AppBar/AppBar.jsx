import { Header, Link, Logo, MainTitle, Nav } from "./AppBar.module";

export default function AppBar() {
  return (
    <Header>
      <Logo>
        <span role="img" aria-label="car icon">
          🚗
        </span>
        Camper Store
      </Logo>

      <MainTitle>Best Campers 4Ever</MainTitle>

      <Nav>
        <Link to="/">Home</Link>
        <Link to="/catalog">Catalog</Link>
        <Link to="/favorites">Favorites</Link>
      </Nav>
    </Header>
  );
}
