import { useSelector } from "react-redux";
import { selectLoader } from "../../../features/loader/loaderSlice";
import { Container } from "./style";

const Loader = () => {
  const show = useSelector(selectLoader);

  return <>{show ? <Container /> : null}</>;
};

export default Loader;
