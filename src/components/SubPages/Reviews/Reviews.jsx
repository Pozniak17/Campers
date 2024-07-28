import { FaStar } from "react-icons/fa";

import {
  Circle,
  Container,
  Item,
  Latter,
  List,
  Text,
  TitleName,
  Wrapper,
} from "./Reviews.module";
import { Form } from "../Form/Form";

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
              <span>
                {data.reviews[0].reviewer_rating === 5 && (
                  <div style={{ color: " #FFC531", width: "16", height: "16" }}>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                )}
              </span>
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
              <span>
                {data.reviews[1].reviewer_rating === 4 && (
                  <div style={{ color: " #FFC531", width: "16", height: "16" }}>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                )}
              </span>
            </div>
          </Wrapper>
          <Text>{data.reviews[1].comment}</Text>
        </Item>
      </List>

      <Form />
    </Container>
  );
};
