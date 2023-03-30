import PropTypes from 'prop-types';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { BackLink } from './GoBack.styled';

export const GoBack = ({ to, children }) => {
  return (
    <BackLink to={to.current.pathname}>
      <AiOutlineArrowLeft />
      {children}
    </BackLink>
  );
};

GoBack.PropType = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node,
};
