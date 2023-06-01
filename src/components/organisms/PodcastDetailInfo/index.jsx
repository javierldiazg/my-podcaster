import PropTypes from 'prop-types';
import { Card, ImageWrapper, Title, Subtitle, Description } from "./style";

const PodcastDetailInfo = ({info}) => {
  return (
    <>
      <Card>
        <ImageWrapper>
          <img src={info?.artworkUrl600} alt="" />
        </ImageWrapper>
        <Title>
          {info?.trackName}
        </Title>
        <Subtitle>
          by {info?.artistName}
        </Subtitle>
        <Description>
        </Description>
      </Card>
    </>
  );
};

PodcastDetailInfo.propTypes = {
  info: PropTypes.object,
};

export default PodcastDetailInfo;
