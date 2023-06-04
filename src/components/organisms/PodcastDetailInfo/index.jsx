import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Card,
  CardItem,
  ImageWrapper,
  Title,
  Subtitle,
  Description,
} from "./style";

const PodcastDetailInfo = ({ podcastId, info }) => {
  return (
    <>
      <Card>
        <CardItem>
          <Link to={`/podcast/${podcastId}`}>
            <ImageWrapper>
              <img src={info?.artworkUrl600} alt="" />
            </ImageWrapper>
          </Link>
        </CardItem>
        <CardItem>
          <Title>
            <Link to={`/podcast/${podcastId}`}>
              {info?.trackName}
            </Link>
          </Title>
          <Subtitle>
            by &nbsp; 
            <Link to={`/podcast/${podcastId}`}>
              {info?.artistName}
            </Link>
          </Subtitle>
          <Description>Description...</Description>
        </CardItem>
      </Card>
    </>
  );
};

PodcastDetailInfo.propTypes = {
  podcastId: PropTypes.string,
  info: PropTypes.object,
};

export default PodcastDetailInfo;
