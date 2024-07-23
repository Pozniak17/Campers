/* eslint-disable react/prop-types */

import LoadMoreButton from "../../LoadMoreButton/LoadMoreButton";
import Card from "../Card/Card";
import { List, Wrapper } from "./CardList.module";

export default function CardList({ items, click }) {
  console.log(items);
  return (
    <Wrapper>
      <List>
        {items.map((item) => (
          <Card key={item._id} campersData={item} />
        ))}
      </List>
      {items.length !== 13 && <LoadMoreButton click={click} />}
    </Wrapper>
  );
}
