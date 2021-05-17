import PropTypes from 'prop-types';

const MapButton = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className='btn map-btn'>
      {text}
    </button>
  );
};

MapButton.defaultProps = {};

MapButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default MapButton;
