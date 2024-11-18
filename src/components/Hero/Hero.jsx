import {
  CustomLink,
  HeroSection,
  MainTitle,
  SecondTitle,
  Wrapper,
} from "./Hero.styled";

export default function Hero() {
  return (
    <HeroSection>
      <Wrapper>
        <MainTitle>Campers of your dreams</MainTitle>
        <SecondTitle>
          You can find everything you want in our catalog
        </SecondTitle>
        <CustomLink to="/catalog">View Now</CustomLink>
      </Wrapper>
    </HeroSection>
  );
}
