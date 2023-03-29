import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AiOutlineArrowLeft } from 'react-icons/ai';

export const GoBack = ({ to, children }) => {
  return (
    <Link to={to}>
      <AiOutlineArrowLeft />
      {children}
    </Link>
  );
};

GoBack.PropType = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node,
};
