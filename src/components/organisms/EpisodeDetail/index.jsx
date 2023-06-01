import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { enableLoader, disableLoader } from '../../../features/loader/loaderSlice';
import { useGetPodcastQuery } from '../../../features/api/apiSlice';
import Error from "../../atoms/Error";
import PodcastDetailInfo from '../PodcastDetailInfo';
import EpisodeDetailInfo from '../EpisodeDetailInfo';
import { Container, AsideWrapper, ContentWrapper } from "./style";

const EpisodeDetail = () => {
  const dispatch = useDispatch();
  const { podcastId, episodeId } = useParams();
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
    const episodeInfo = data?.results.find(e => e.kind === 'podcast-episode' && e.trackId == episodeId);
    result = (
      <>
        <AsideWrapper>
          <PodcastDetailInfo info={podcastInfo} />
        </AsideWrapper>
        <ContentWrapper>
          <EpisodeDetailInfo info={episodeInfo} />
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

export default EpisodeDetail;
