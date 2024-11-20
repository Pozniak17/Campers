import { FC } from "react";
import { Data } from "../../pages/Catalog";
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";
import { List, Wrapper } from "./CardList.styled";
import { Card } from "../Card/Card";

interface CardListProps {
  items: Data[];
  click: () => void;
}

export const CardList: FC<CardListProps> = ({ items, click }) => {
  return (
    <Wrapper>
      <List>
        {items.map((item) => (
          <Card data={item} key={item.id} />
        ))}
      </List>
      {items?.length > 0 && items.length < 13 && (
        <LoadMoreButton click={click} />
      )}
    </Wrapper>
  );
};
