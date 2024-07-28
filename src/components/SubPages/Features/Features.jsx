/* eslint-disable no-undef */
import {
  FirstWrapper,
  Item,
  List,
  MainWrapper,
  OptionItem,
  OptionList,
  OptionText,
  Text,
  Title,
} from "./Features.module";
import { IoPeopleOutline } from "react-icons/io5";
import { TbAutomaticGearbox } from "react-icons/tb";
import { TbToolsKitchen2 } from "react-icons/tb";
import { IoBedOutline } from "react-icons/io5";
import { RiWindyFill } from "react-icons/ri";
import { MdOutlineLocalGasStation } from "react-icons/md";
import { TbAirConditioning } from "react-icons/tb";
import { LiaCompactDiscSolid } from "react-icons/lia";
import { MdOutlineRadio } from "react-icons/md";
import { TbCooker } from "react-icons/tb";
import { Form } from "../Form/Form";

/* eslint-disable react/prop-types */
export const Features = ({ data }) => {
  return (
    <MainWrapper>
      <FirstWrapper>
        <List>
          <Item>
            <Text>
              <IoPeopleOutline style={{ width: "20px", height: "20px" }} />
              {data.adults} adults
            </Text>
          </Item>
          <Item>
            <Text>
              <TbAutomaticGearbox />
              Automatic
            </Text>
          </Item>
          <Item>
            <Text>
              <RiWindyFill />
              AC
            </Text>
          </Item>
          <Item>
            <Text>
              <MdOutlineLocalGasStation
                style={{ width: "20px", height: "20px" }}
              />
              Petrol
            </Text>
          </Item>
          <Item>
            <Text>
              <TbToolsKitchen2 style={{ width: "20px", height: "20px" }} />{" "}
              kitchen
            </Text>
          </Item>
          <Item>
            <Text>
              <IoBedOutline style={{ width: "20px", height: "20px" }} />
              {data.details.beds} beds
            </Text>
          </Item>
          <Item>
            <Text>
              <TbAirConditioning style={{ width: "20px", height: "20px" }} />
              {data.details.airConditioner} air conditioner
            </Text>
          </Item>
          <Item>
            <Text>
              <LiaCompactDiscSolid style={{ width: "20px", height: "20px" }} />{" "}
              CD
            </Text>
          </Item>
          <Item>
            <Text>
              <MdOutlineRadio style={{ width: "20px", height: "20px" }} /> Radio
            </Text>
          </Item>
          <Item>
            <Text>
              <TbCooker style={{ width: "20px", height: "20px" }} />
              {data.details.hob} hob
            </Text>
          </Item>
        </List>

        <div>
          <Title>Vehicle details</Title>
          <OptionList>
            <OptionItem>
              <OptionText>Form</OptionText>
              <OptionText>{data.form}</OptionText>
            </OptionItem>
            <OptionItem>
              <OptionText>Length</OptionText>
              <OptionText>{data.length}</OptionText>
            </OptionItem>
            <OptionItem>
              <OptionText>Width</OptionText>
              <OptionText>{data.width}</OptionText>
            </OptionItem>
            <OptionItem>
              <OptionText>Height</OptionText>
              <OptionText>{data.height}</OptionText>
            </OptionItem>
            <OptionItem>
              <OptionText>Tank</OptionText>
              <OptionText>{data.tank}</OptionText>
            </OptionItem>
            <OptionItem>
              <OptionText>Consumption</OptionText>
              <OptionText>{data.consumption}</OptionText>
            </OptionItem>
          </OptionList>
        </div>
      </FirstWrapper>

      <Form />
    </MainWrapper>
  );
};
