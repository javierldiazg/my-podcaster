import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";
import EpisodeDetail from "../../organisms/EpisodeDetail";
import { Container, MainWraper } from "./style";

const EpisodeTemplate = () => {
  return (
    <>
      <Container>
        <Header />
        <MainWraper>
          <EpisodeDetail />
        </MainWraper>
        <Footer />
      </Container>
    </>
  );
};

export default EpisodeTemplate;
