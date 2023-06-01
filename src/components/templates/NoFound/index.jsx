import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";
import { Container, MainWraper } from "./style";

const NoFoundTemplate = () => {
  return (
    <>
      <Container>
        <Header />
        <MainWraper>
          Page no found here...
        </MainWraper>
        <Footer />
      </Container>
    </>
  );
};

export default NoFoundTemplate;
