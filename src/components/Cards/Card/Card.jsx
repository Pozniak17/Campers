/* eslint-disable react/prop-types */
import { IoCloseSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { useState } from "react";
import { CamperModal } from "../../Modal/CamperModal";
import {
  Container,
  Title,
  WrapperTitle,
  Img,
  Button,
  ImageWrapper,
  Item,
  ModalTitleWrapper,
  SecondWrapper,
} from "./Card.module";

export default function Card({ campersData }) {
  const [modalOpen, setModalOpen] = useState(false);

  console.log(campersData);
  return (
    <Container>
      <div>
        <Img src={campersData.gallery[0]} alt="" width="290px" height="310px" />
      </div>
      <div>
        <WrapperTitle>
          <Title>{campersData.name}</Title>
          <Title>€8000.00</Title>
        </WrapperTitle>
        <Button onClick={() => setModalOpen(true)}>Show more</Button>

        <CamperModal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
          <ModalTitleWrapper>
            <h2>{campersData.name}</h2>
            <button onClick={() => setModalOpen(false)}>
              <IoCloseSharp
                style={{
                  width: "32px",
                  height: "32px",
                  display: "flex",
                  padding: "0",
                  cursor: "pointer",
                }}
              />
            </button>
          </ModalTitleWrapper>

          <SecondWrapper>
            <FaStar
              style={{
                color: "#FFC531",
                width: "16px",
                height: "16px",
              }}
            />

            <p>
              {campersData.rating} ({campersData.reviews.length} Reviews)
            </p>
            <FiMapPin
              style={{
                width: "16px",
                height: "16px",
              }}
            />
            <p>{campersData.location}</p>
          </SecondWrapper>

          <p>{`€${campersData.price}.00`}</p>

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
            <p>{campersData.description}</p>
          </div>
        </CamperModal>
      </div>
    </Container>
  );
}
