import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Card, ImageWrapper, Title, Description } from "./style";

const PodcastListItem = ({ id, image, name, artist }) => {
  return (
    <>
      <Card>
        <Link to={`/podcast/${id}`}>
          <ImageWrapper>
            <img src={image} alt="" />
          </ImageWrapper>
          <Title>{name}</Title>
        </Link>
        <Description>Author: {artist}</Description>
      </Card>
    </>
  );
};

PodcastListItem.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  artist: PropTypes.string,
};

export default PodcastListItem;
