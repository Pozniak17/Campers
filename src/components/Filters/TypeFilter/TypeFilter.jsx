import {
  Button,
  Container,
  Item,
  Line,
  List,
  Title,
} from "./TypeFilter.styled";

export default function TypeFilter() {
  return (
    <Container>
      <Title>Vehicle type</Title>
      <Line />

      <List>
        <Item>
          <Button>Van</Button>
        </Item>
        <Item>
          <Button>Fully Integrated</Button>
        </Item>
        <Item>
          <Button>Alcove</Button>
        </Item>
      </List>
    </Container>
  );
}
