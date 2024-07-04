/* eslint-disable react/prop-types */

import Card from "../Card/Card";
import { List } from "./CardList.module";

export default function CardList({ items }) {
  return (
    <List>
      {items.map((item) => (
        <Card key={item._id} img={item.gallery[0]} name={item.name} />
      ))}
      <Card />
    </List>
  );
}
