import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoPeopleOutline } from "react-icons/io5";
import { TbAutomaticGearbox } from "react-icons/tb";
import { TbToolsKitchen2 } from "react-icons/tb";
import { IoBedOutline } from "react-icons/io5";
import { RiWindyFill } from "react-icons/ri";
import { MdOutlineLocalGasStation } from "react-icons/md";

// import { IoCloseSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { useState, useEffect, FC } from "react";
// import { CamperModal } from "../Modal/CamperModal";
import {
  Container,
  Title,
  WrapperTitle,
  Img,
  Button,
  Item,
  // ImageWrapper,
  // ModalTitleWrapper,
  // SecondWrapper,
  // CloseButton,
  // DataText,
  // LocationText,
  // AboutText,
  // BtnWrapper,
  // ButtonParagraph,
  List,
  Text,
  WrapperData,
  ShortText,
  IconWrapper,
} from "./Card.styled";
import { Features } from "../SubPages/Features/Features";
import { Reviews } from "../SubPages/Reviews/Reviews";
import { Data } from "../../pages/Catalog";

type CardProps = {
  data: Data;
};

export const Card: FC<CardProps> = ({ data }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<"features" | "reviews">(
    "features"
  );

  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Container>
      <div>
        <Img
          src={data.gallery[0].thumb}
          alt={data.description}
          width="290px"
          height="310px"
        />
      </div>
      <div>
        <WrapperTitle>
          <Title>{data.name}</Title>
          <IconWrapper>
            <Title>{`€${data.price},00`}</Title>
            <div style={{ cursor: "pointer" }}>
              {isFavorite ? <FaHeart color="red" /> : <FaRegHeart />}
            </div>
          </IconWrapper>
        </WrapperTitle>

        <WrapperData>
          <FaStar style={{ color: "#FFC531" }} />
          <p>
            {data.rating} ({data.reviews.length} Rewiews)
          </p>
          <FiMapPin />
          <p>{data.location}</p>
        </WrapperData>

        <ShortText>{data.description.slice(0, 61)}..</ShortText>

        <List>
          <Item>
            <Text>
              <TbAutomaticGearbox />
              Automatic
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
              Kitchen
            </Text>
          </Item>

          <Item>
            <Text>
              <RiWindyFill />
              AC
            </Text>
          </Item>
        </List>
        <Button onClick={() => setModalOpen(true)}>Show more</Button>

        {/* <CamperModal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
          <ModalTitleWrapper>
            <Title>{campersData.name}</Title>

            <CloseButton onClick={() => setModalOpen(false)}>
              <IoCloseSharp
                style={{
                  width: "32px",
                  height: "32px",
                  display: "flex",
                  padding: "0",
                  cursor: "pointer",
                }}
              />
            </CloseButton>
          </ModalTitleWrapper>

          <SecondWrapper>
            <FaStar
              style={{
                color: "#FFC531",
                width: "16px",
                height: "16px",
              }}
            />

            <DataText>
              {campersData.rating}({campersData.reviews.length} Reviews)
            </DataText>
            <FiMapPin
              style={{
                width: "16px",
                height: "16px",
              }}
            />
            <LocationText>{campersData.location}</LocationText>
          </SecondWrapper>

          <Title>{`€${campersData.price}.00`}</Title>

          <div>
            <ImageWrapper>
              <Item>
                <Img
                  src={campersData.gallery[0]}
                  width={290}
                  height={310}
                  alt=""
                />
              </Item>
              <Item>
                <Img
                  src={campersData.gallery[1]}
                  width={290}
                  height={310}
                  alt=""
                />
              </Item>
              <Item>
                <Img
                  src={campersData.gallery[2]}
                  width={290}
                  height={310}
                  alt=""
                />
              </Item>
            </ImageWrapper>
            <AboutText>{campersData.description}</AboutText>
          </div>

          <BtnWrapper>
            <li>
              <ButtonParagraph
                onClick={() => setActiveTab("features")}
                isActive={activeTab === "features"}
              >
                Features
              </ButtonParagraph>
            </li>
            <li>
              <ButtonParagraph
                onClick={() => setActiveTab("reviews")}
                isActive={activeTab === "reviews"}
              >
                Reviews
              </ButtonParagraph>
            </li>
          </BtnWrapper>

          {activeTab === "features" ? (
            <div>
              <Features data={campersData} />
            </div>
          ) : (
            <div>
              <Reviews data={campersData} />
            </div>
          )}
        </CamperModal> */}
      </div>
    </Container>
  );
};
