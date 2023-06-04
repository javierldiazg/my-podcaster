import PropTypes from "prop-types";
import parse from 'html-react-parser';
import { Card, Title, Description, AudioWrapper } from "./style";

const EpisodeDetailInfo = ({ info }) => {
  const parse = require('html-react-parser');

  return (
    <>
      <Card>
        <Title>{info?.trackName}</Title>
        <Description>
          {parse(info?.description)}
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
