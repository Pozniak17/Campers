/* eslint-disable react/prop-types */

import LoadMoreButton from "../../LoadMoreButton/LoadMoreButton";
import Card from "../Card/Card";
import { List, Wrapper } from "./CardList.module";

export default function CardList({ items }) {
  return (
    <Wrapper>
      <List>
        {items.map((item) => (
          <Card key={item._id} img={item.gallery[0]} name={item.name} />
        ))}
        <Card />
      </List>
      <LoadMoreButton />
    </Wrapper>
  );
}
