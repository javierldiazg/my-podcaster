import PropTypes from "prop-types";
import {
  Card,
  CardItem,
  ImageWrapper,
  Title,
  Subtitle,
  Description,
} from "./style";

const PodcastDetailInfo = ({ info }) => {
  return (
    <>
      <Card>
        <CardItem>
          <ImageWrapper>
            <img src={info?.artworkUrl600} alt="" />
          </ImageWrapper>
        </CardItem>
        <CardItem>
          <Title>{info?.trackName}</Title>
          <Subtitle>by {info?.artistName}</Subtitle>
          <Description></Description>
        </CardItem>
      </Card>
    </>
  );
};

PodcastDetailInfo.propTypes = {
  info: PropTypes.object,
};

export default PodcastDetailInfo;
