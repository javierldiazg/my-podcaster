import PropTypes from 'prop-types';
import { Container } from "./style";

const Error = ({message}) => {
  return (
    <>
      <Container>
				{message}
			</Container>
    </>
  );
};

Error.propTypes = {
  message: PropTypes.string,
};

export default Error;
