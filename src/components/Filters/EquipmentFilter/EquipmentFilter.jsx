/* eslint-disable react/prop-types */
import { Icon } from "../../shared/Icon";
import {
  Checkbox,
  Container,
  Item,
  Label,
  Line,
  List,
  MainTitle,
  Title,
} from "./EquipmentFilter.styled";

export const EquipmentFilter = () => {
  //   const handleChange = (event) => {
  //     const { name, checked } = event.target;
  //     onEquipmentChange({ ...equipment, [name]: checked });
  //   };

  return (
    <Container>
      <Title>Filters</Title>
      <MainTitle>Vehicle equipment</MainTitle>
      <Line />
      <List>
        <Item>
          <Label>
            <Icon name="icon-wind" width="32px" height="32px" />
            AC
            <Checkbox
              type="checkbox"
              name="airConditioner"
              //   checked={equipment.ac}
              //   onChange={handleChange}
            />
          </Label>
        </Item>

        <Item>
          <Label>
            <Icon name="icon-automatic" width="32px" height="32px" />
            Automatic
            <Checkbox
              type="checkbox"
              name="automatic"
              //   checked={equipment.automatic}
              //   onChange={handleChange}
            />
          </Label>
        </Item>

        <Item>
          <Label>
            <Icon name="icon-kitchen" width="32px" height="32px" />
            Kitchen
            <Checkbox
              type="checkbox"
              name="kitchen"
              //   checked={equipment.kitchen}
              //   onChange={handleChange}
            />
          </Label>
        </Item>
        <Item>
          <Label>
            <Icon name="icon-tv" width="32px" height="32px" />
            TV
            <Checkbox
              type="checkbox"
              name="tv"
              //   checked={equipment.tv}
              //   onChange={handleChange}
            />
          </Label>
        </Item>

        <Item>
          <Label>
            <Icon name="icon-bathroom" width="32px" height="32px" />
            Shower/WC
            <Checkbox
              type="checkbox"
              name="shower"
              //   checked={equipment.shower}
              //   onChange={handleChange}
            />
          </Label>
        </Item>
      </List>
    </Container>
  );
};
