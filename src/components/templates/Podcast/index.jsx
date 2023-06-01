import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";
import PodcastDetail from "../../organisms/PodcastDetail";
import { Container, MainWraper } from "./style";

const PodcastTemplate = () => {
  return (
    <>
      <Container>
        <Header />
        <MainWraper>
          <PodcastDetail />
        </MainWraper>
        <Footer />
      </Container>
    </>
  );
};

export default PodcastTemplate;
