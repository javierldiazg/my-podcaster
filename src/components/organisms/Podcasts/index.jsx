import { useDispatch } from "react-redux";
import {
  enableLoader,
  disableLoader,
} from "../../../features/loader/loaderSlice";
import { useGetPodcastsQuery } from "../../../features/api/apiSlice";
import Error from "../../atoms/Error";
import PodcastsList from "../PodcastsList";
import { Container, ResultWrapper } from "./style";

const Podcasts = () => {
  const dispatch = useDispatch();
  const { data, isLoading, isSuccess, isError, error } = useGetPodcastsQuery();
  let result;

  if (isLoading) {
    dispatch(enableLoader());
  } else if (isSuccess) {
    dispatch(disableLoader());
    result = <PodcastsList items={data?.feed?.entry} />;
  } else if (isError) {
    result = <Error message={error?.message} />;
  }

  return (
    <>
      <Container>
        <ResultWrapper>{result}</ResultWrapper>
      </Container>
    </>
  );
};

export default Podcasts;
