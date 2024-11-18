/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import LoadMoreButton from "../../LoadMoreButton/LoadMoreButton";
import Card from "../Card/Card";
import { List, Wrapper } from "./CardList.styled";

export default function CardList({ onClick }) {
  const visibleItems = useSelector((state) => state.filters.visibleItems);
  const campers = useSelector((state) => state.campers.items);

  const itemsToDisplay = visibleItems.length ? visibleItems : campers;

  return (
    <Wrapper>
      <List>
        {itemsToDisplay.map((item) => (
          <Card key={item._id} campersData={item} />
        ))}
      </List>
      {itemsToDisplay?.length > 0 && itemsToDisplay.length < 13 && (
        <LoadMoreButton click={onClick} />
      )}
    </Wrapper>
  );
}
