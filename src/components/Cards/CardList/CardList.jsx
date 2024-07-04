import Card from "../Card/Card";
import { List } from "./CardList.module";

export default function CardList() {
  return (
    <List>
      <Card />
      <Card />
      <Card />
    </List>
  );
}
