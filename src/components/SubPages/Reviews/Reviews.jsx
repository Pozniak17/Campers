import {
  Circle,
  Container,
  Item,
  Latter,
  List,
  Text,
  TitleName,
  Wrapper,
} from "./Reviews.styled";
import { CamperForm } from "../CamperForm/CamperForm";
import { Stars } from "../../services/stars";

/* eslint-disable react/prop-types */
export const Reviews = ({ data }) => {
  console.log(data);
  return (
    <Container>
      <List>
        <Item>
          <Wrapper>
            <Circle>
              <Latter>{data.reviews[0].reviewer_name.slice(0, 1)}</Latter>
            </Circle>

            <div>
              <TitleName>{data.reviews[0].reviewer_name}</TitleName>

              {/* функція для зірочок */}
              <span>{Stars(data.reviews[0].reviewer_rating)}</span>
            </div>
          </Wrapper>

          <Text>{data.reviews[0].comment}</Text>
        </Item>

        <Item>
          <Wrapper>
            <Circle>
              <Latter>{data.reviews[1].reviewer_name.slice(0, 1)}</Latter>
            </Circle>

            <div>
              <TitleName>{data.reviews[1].reviewer_name}</TitleName>

              {/* функція для зірочок */}
              <span>{Stars(data.reviews[1].reviewer_rating)}</span>
            </div>
          </Wrapper>
          <Text>{data.reviews[1].comment}</Text>
        </Item>
      </List>
      <CamperForm />
    </Container>
  );
};
