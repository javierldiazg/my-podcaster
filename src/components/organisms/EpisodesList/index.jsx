import PropTypes from 'prop-types';
import EpisodesListItem from '../EpisodesListItem';
import { Wrapper, Card, Title, ItemsWrapper, HeaderWrapper, TitleHeader, DateHeader, DurationHeader } from "./style";

const EpisodesList = ({
  podcastId,
  items,
}) => {
  const renderList = (podcastId) => {
    return items.map((item, i) => {
      return <EpisodesListItem
        key={i}
        podcastId={podcastId}
        item={item}
      />;
    });
  };

  return (
    <>
      <Wrapper>
        <Card>
          <Title>Episodes {items.length}</Title>
          <ItemsWrapper>
            <HeaderWrapper>
              <TitleHeader>Title</TitleHeader>
              <DateHeader>Date</DateHeader>
              <DurationHeader>Duration</DurationHeader>
            </HeaderWrapper>
            {items.length > 0 && renderList(podcastId)}
          </ItemsWrapper>
        </Card>
      </Wrapper>
    </>
  );
};

EpisodesList.propTypes = {
  podcastId: PropTypes.string,
  items: PropTypes.array,
};

export default EpisodesList;
