import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";
import Podcasts from "../../organisms/Podcasts";
import { Container, MainWraper } from "./style";

const HomeTemplate = () => {
  return (
    <>
      <Container>
        <Header />
        <MainWraper>
          <Podcasts />
        </MainWraper>
        <Footer />
      </Container>
    </>
  );
};

export default HomeTemplate;
