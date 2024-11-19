import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";
import Card from "../Card/Card";
import { List, Wrapper } from "./CardList.styled";

export default function CardList({ items, click }) {
  console.log(items);
  return (
    <Wrapper>
      <List>
        {items.map((item) => (
          <Card
            key={item.id}
            campersData={item}
            campersImg={item.gallery[0].thumb}
          />
        ))}
      </List>
      {items?.length > 0 && items.length < 13 && (
        <LoadMoreButton click={click} />
      )}
    </Wrapper>
  );
}
