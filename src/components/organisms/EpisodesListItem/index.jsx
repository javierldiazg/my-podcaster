import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from "react-router-dom";
import { Wrapper, Title, Date, Duration } from "./style";

const EpisodesListItem = ({
  podcastId,
  item,
}) => { 
  const convertMsToTime = (milliseconds) => {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);

    seconds = seconds % 60;
    minutes = minutes % 60;

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };
  
  return (
    <>
      <Wrapper>
        <Title>
          <Link to={`/podcast/${podcastId}/episode/${item?.trackId}`}>
            {item?.trackName}
          </Link>
        </Title>
        <Date>{moment(item?.releaseDate).format('M/d/YYYY')}</Date>
        <Duration>{convertMsToTime(item?.trackTimeMillis)}</Duration>
      </Wrapper>
    </>
  );
};

EpisodesListItem.propTypes = {
  podcastId: PropTypes.string,
  item: PropTypes.object,
};

export default EpisodesListItem;
