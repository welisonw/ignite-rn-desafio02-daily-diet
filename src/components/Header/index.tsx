import { Container, Logo, Photo } from "./styles";
import IconLogo from "../../../assets/logo.png";
import ProfilePhoto from "../../../assets/photo.png";

export const Header = () => {
  return (
    <Container>
      <Logo source={IconLogo} />
      <Photo source={ProfilePhoto} />
    </Container>
  );
};
