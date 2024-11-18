import styled from "styled-components";

export const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledSwiperButton = styled.div`
  position: absolute;
  top: 50%;
  width: 30px;
  height: 30px;
  color: #e44848;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transform: translateY(-50%);

  &.swiper-button-prev {
    left: 10px;
  }

  &.swiper-button-next {
    right: 10px;
  }
`;
