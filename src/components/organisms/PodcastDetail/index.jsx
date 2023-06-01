import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { enableLoader, disableLoader } from '../../../features/loader/loaderSlice';
import { useGetPodcastQuery } from '../../../features/api/apiSlice';
import Error from "../../atoms/Error";
import PodcastDetailInfo from '../PodcastDetailInfo';
import EpisodesList from '../EpisodesList';
import { Container, AsideWrapper, ContentWrapper } from "./style";

const PodcastDetail = () => {
  const dispatch = useDispatch();
  let { podcastId } = useParams();
  const {
    data,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetPodcastQuery(podcastId);
  let result;

  if (isLoading) {
    dispatch(enableLoader());
  } else if (isSuccess) {
    dispatch(disableLoader());
    const podcastInfo = data?.results.find(e => e.kind === 'podcast');
    const episodeList = data?.results.filter(e => e.kind === 'podcast-episode');
    result = (
      <>
        <AsideWrapper>
          <PodcastDetailInfo info={podcastInfo} />
        </AsideWrapper>
        <ContentWrapper>
          <EpisodesList podcastId={podcastId} items={episodeList} />
        </ContentWrapper>
      </>
    );
  } else if (isError) {
    result = <Error message={error?.message} />
  }

  return (
    <>
      <Container>
        {result}
      </Container>
    </>
  );
};

export default PodcastDetail;
