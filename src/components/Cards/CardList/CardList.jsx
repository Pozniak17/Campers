/* eslint-disable react/prop-types */

import { useSelector } from "react-redux";
import LoadMoreButton from "../../LoadMoreButton/LoadMoreButton";
import Card from "../Card/Card";
import { List, Wrapper } from "./CardList.module";

export default function CardList({ items, click, filterData }) {
  const visibleItems = useSelector((state) => state.visibleItems);
  const campers = useSelector((state) => state.campers);

  const itemsToDisplay = visibleItems.length ? visibleItems : campers;

  console.log(items);
  return (
    <Wrapper>
      <List>
        {itemsToDisplay.map((item) => (
          <Card key={item._id} campersData={item} />
        ))}
      </List>
      {items.length !== 13 && filterData.length < 2 && (
        <LoadMoreButton click={click} />
      )}
    </Wrapper>
  );
}
