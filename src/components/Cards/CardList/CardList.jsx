/* eslint-disable react/prop-types */

import LoadMoreButton from "../../LoadMoreButton/LoadMoreButton";
import Card from "../Card/Card";
import { List, Wrapper } from "./CardList.module";

export default function CardList({ items, click }) {
  console.log(items.length);
  return (
    <Wrapper>
      <List>
        {items.map((item) => (
          <Card key={item._id} img={item.gallery[0]} name={item.name} />
        ))}
      </List>
      {items.length >= 2 && <LoadMoreButton click={click} />}
    </Wrapper>
  );
}
