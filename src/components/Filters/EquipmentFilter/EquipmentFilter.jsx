import {
  Button,
  Item,
  Line,
  List,
  MainTitle,
  Title,
} from "./EquipmentFilter.module";

export default function EquipmentFilter() {
  return (
    <div>
      <Title>Filters</Title>
      <MainTitle>Vehicle equipment</MainTitle>
      <Line />
      <List>
        <Item>
          <Button>AC</Button>
        </Item>
        <Item>
          <Button>Automatic</Button>
        </Item>
        <Item>
          <Button>Kitchen</Button>
        </Item>
        <Item>
          <Button>TV</Button>
        </Item>
        <Item>
          <Button>Shower/WC</Button>
        </Item>
      </List>
    </div>
  );
}
