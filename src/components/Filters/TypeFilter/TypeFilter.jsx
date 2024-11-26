import { Icon } from "../../shared/Icon.jsx";
import {
  Checkbox,
  Container,
  Item,
  Label,
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
          <Label>
            <Icon name="icon-van" width="32px" height="32px" />
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
            <Icon name="icon-fully-Integrated" width="32px" height="32px" />
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
            <Icon name="icon-alcove" width="32px" height="32px" />
            Kitchen
            <Checkbox
              type="checkbox"
              name="kitchen"
              //   checked={equipment.kitchen}
              //   onChange={handleChange}
            />
          </Label>
        </Item>
      </List>
    </Container>
  );
}
