/* eslint-disable react/prop-types */
import { RiWindyLine } from "react-icons/ri";
import { TbAutomaticGearbox } from "react-icons/tb";
import { TbToolsKitchen2 } from "react-icons/tb";
import { PiTelevisionSimple } from "react-icons/pi";
import { LuShowerHead } from "react-icons/lu";
import {
  Container,
  Item,
  Label,
  Line,
  List,
  MainTitle,
  Title,
} from "./EquipmentFilter.module";

export const EquipmentFilter = ({ equipment, onEquipmentChange }) => {
  const handleChange = (event) => {
    const { name, checked } = event.target;
    onEquipmentChange({ ...equipment, [name]: checked });
  };

  return (
    <Container>
      <Title>Filters</Title>
      <MainTitle>Vehicle equipment</MainTitle>
      <Line />
      <List>
        <Item>
          <Label>
            <RiWindyLine
              style={{
                width: "32px",
                height: "32px",
              }}
            />
            AC
            <input
              type="checkbox"
              name="airConditioner"
              checked={equipment.ac}
              onChange={handleChange}
            />
          </Label>
        </Item>

        <Item>
          <Label>
            <TbAutomaticGearbox
              style={{
                width: "32px",
                height: "32px",
              }}
            />
            Automatic
            <input
              type="checkbox"
              name="automatic"
              checked={equipment.automatic}
              onChange={handleChange}
            />
          </Label>
        </Item>

        <Item>
          <Label>
            <TbToolsKitchen2
              style={{
                width: "32px",
                height: "32px",
              }}
            />
            Kitchen
            <input
              type="checkbox"
              name="kitchen"
              checked={equipment.kitchen}
              onChange={handleChange}
            />
          </Label>
        </Item>
        <Item>
          <Label>
            <PiTelevisionSimple
              style={{
                width: "32px",
                height: "32px",
              }}
            />
            TV
            <input
              type="checkbox"
              name="tv"
              checked={equipment.tv}
              onChange={handleChange}
            />
          </Label>
        </Item>

        <Item>
          <Label>
            <LuShowerHead
              style={{
                width: "32px",
                height: "32px",
              }}
            />
            Shower/WC
            <input
              type="checkbox"
              name="shower"
              checked={equipment.shower}
              onChange={handleChange}
            />
          </Label>
        </Item>
      </List>
    </Container>
  );
};
