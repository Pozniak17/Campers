import { Container, Title, WrapperTitle } from "./Card.module";

export default function Card() {
  return (
    <Container>
      <div>
        <img src="" alt="" width="290px" height="310px" />
      </div>
      <div>
        <WrapperTitle>
          <Title>Mavericks</Title>
          <Title>€8000.00</Title>
        </WrapperTitle>
      </div>
    </Container>
  );
}
