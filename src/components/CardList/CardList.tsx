import { Card } from "../Card";
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";
import { List, Wrapper } from "./CardList.styled";

export default function CardList({ items, click }) {
  console.log(items);
  return (
    <Wrapper>
      <List>
        {items.map(
          ({
            id,
            gallery,
            description,
            name,
            price,
            rating,
            reviews,
            location,
          }) => (
            <Card
              key={id}
              image={gallery[0].thumb}
              description={description}
              title={name}
              price={price}
              rating={rating}
              reviewsNumber={reviews.length}
              location={location}
            />
          )
        )}
      </List>
      {items?.length > 0 && items.length < 13 && (
        <LoadMoreButton click={click} />
      )}
    </Wrapper>
  );
}
