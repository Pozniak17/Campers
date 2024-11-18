import Icon from "../shared/icon";
import { Header, Link, List, Item } from "./AppBar.styled";

export default function AppBar() {
  return (
    <Header>
      <span>
        <Icon name="icon-logo" width="136px" height="16px" />
      </span>
      <nav>
        <List>
          <Item>
            <Link to="/">Home</Link>
          </Item>
          <Item>
            <Link to="/catalog">Catalog</Link>
          </Item>
          <Item>
            <Link to="/favorites">Favorites</Link>
          </Item>
        </List>
      </nav>
    </Header>
  );
}
