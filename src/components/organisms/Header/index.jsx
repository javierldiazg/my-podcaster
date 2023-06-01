import { Link } from "react-router-dom";
import Loader from "../../atoms/Loader";
import { Container, Wrapper, TitleWrapper, Title, LoaderWrapper } from "./style";

const Header = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <TitleWrapper>
            <Title>
              <Link to="/">
                PodCaster
              </Link>
            </Title>
          </TitleWrapper>
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
        </Wrapper>
      </Container>
    </>
  );
};

export default Header;
