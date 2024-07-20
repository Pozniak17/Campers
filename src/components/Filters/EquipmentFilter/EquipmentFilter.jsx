import {
  Button,
  Container,
  Item,
  Line,
  List,
  MainTitle,
  Title,
} from "./EquipmentFilter.module";

export default function EquipmentFilter() {
  return (
    <Container>
      <Title>Filters</Title>
      <MainTitle>Vehicle equipment</MainTitle>
      <Line />
      <List>
        <Item>
          <Button type="button" name="airConditioner">
            AC
          </Button>
        </Item>
        <Item>
          <Button type="button" name="transmission">
            Automatic
          </Button>
        </Item>
        <Item>
          <Button type="button" name="kitchen">
            Kitchen
          </Button>
        </Item>
        <Item>
          <Button type="button" name="TV">
            TV
          </Button>
        </Item>
        <Item>
          <Button type="button" name="shower">
            Shower/WC
          </Button>
        </Item>
      </List>
    </Container>
  );
}
