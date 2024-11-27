import { FC, FormEvent } from "react";
import { Icon } from "../shared/icon";
import {
  Checkbox,
  EquipmentItem,
  Label,
  EquipmentList,
  EquipmentMainTitle,
  EquipmentTitle,
  EquipmentWrapper,
  FormWrapper,
  IconStyled,
  Line,
  LocationInput,
  LocationInputWrapper,
  LocationTitle,
  LocationWrapper,
  TypeWrapper,
  TypeTitle,
  TypeList,
  TypeItem,
  Button,
} from "./Filters.styled";

export interface FiltersProps {
  handleLocation: (value: string) => void;
}

export const Filters: FC<FiltersProps> = ({ handleLocation }) => {
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const form = evt.target as HTMLFormElement;
    const { location } = form.elements as any;

    handleLocation(location.value);

    form.reset();
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      {/* location */}
      <LocationWrapper>
        <LocationTitle>Location</LocationTitle>

        <LocationInputWrapper>
          <IconStyled
            name="icon-map"
            width="20px"
            height="20px"
            color="#6C717B"
          />
          <LocationInput type="text" name="location" placeholder="City" />
        </LocationInputWrapper>
      </LocationWrapper>
      {/* equipment */}
      <EquipmentWrapper>
        <EquipmentTitle>Filters</EquipmentTitle>
        <EquipmentMainTitle>Vehicle equipment</EquipmentMainTitle>
        <Line />
        <EquipmentList>
          <EquipmentItem>
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
          </EquipmentItem>

          <EquipmentItem>
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
          </EquipmentItem>

          <EquipmentItem>
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
          </EquipmentItem>
          <EquipmentItem>
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
          </EquipmentItem>

          <EquipmentItem>
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
          </EquipmentItem>
        </EquipmentList>
      </EquipmentWrapper>
      {/* type */}
      <TypeWrapper>
        <TypeTitle>Vehicle type</TypeTitle>
        <Line />

        <TypeList>
          <TypeItem>
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
          </TypeItem>
          <TypeItem>
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
          </TypeItem>
          <TypeItem>
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
          </TypeItem>
        </TypeList>
      </TypeWrapper>
      <Button type="submit">Search</Button>
    </FormWrapper>
  );
};
