import { RiWindyLine } from "react-icons/ri";
import { TbAutomaticGearbox } from "react-icons/tb";
import { TbToolsKitchen2 } from "react-icons/tb";
import { PiTelevisionSimple } from "react-icons/pi";
import { LuShowerHead } from "react-icons/lu";
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
            <RiWindyLine
              style={{
                width: "32px",
                height: "32px",
              }}
            />
            AC
          </Button>
        </Item>
        <Item>
          <Button type="button" name="transmission">
            <TbAutomaticGearbox
              style={{
                width: "32px",
                height: "32px",
              }}
            />
            Automatic
          </Button>
        </Item>
        <Item>
          <Button type="button" name="kitchen">
            <TbToolsKitchen2
              style={{
                width: "32px",
                height: "32px",
              }}
            />
            Kitchen
          </Button>
        </Item>
        <Item>
          <Button type="button" name="TV">
            <PiTelevisionSimple
              style={{
                width: "32px",
                height: "32px",
              }}
            />
            TV
          </Button>
        </Item>
        <Item>
          <Button type="button" name="shower">
            <LuShowerHead
              style={{
                width: "32px",
                height: "32px",
              }}
            />
            Shower/WC
          </Button>
        </Item>
      </List>
    </Container>
  );
}
