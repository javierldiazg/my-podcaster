import PropTypes from 'prop-types';
import { Card, Title, Description, AudioWrapper } from "./style";

const EpisodeDetailInfo = ({info}) => {
  return (
    <>
      <Card>
        <Title>
          {info?.trackName}
        </Title>
        <Description>
          {info?.description}
        </Description>
        <AudioWrapper>
          <audio controls>
            <source src={info?.episodeUrl} type="audio/mpeg" />
            <source src={info?.episodeUrl} type="audio/ogg" />
          </audio>
        </AudioWrapper>
      </Card>
    </>
  );
};

EpisodeDetailInfo.propTypes = {
  info: PropTypes.object,
};

export default EpisodeDetailInfo;
