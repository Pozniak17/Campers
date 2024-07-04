/* eslint-disable react/prop-types */
import { Container, Title, WrapperTitle, Img } from "./Card.module";

export default function Card({ img, name }) {
  return (
    <Container>
      <div>
        <Img src={img} alt="" width="290px" height="310px" />
      </div>
      <div>
        <WrapperTitle>
          <Title>{name}</Title>
          <Title>€8000.00</Title>
        </WrapperTitle>
      </div>
    </Container>
  );
}
