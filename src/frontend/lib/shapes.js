import PropTypes from 'prop-types';

export const stepShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  parentId: PropTypes.string,
  type: PropTypes.string.isRequired,

  // for loop step
  algorithm: PropTypes.arrayOf(PropTypes.any), // recursive stepShape
  iterations: PropTypes.number,
});

export const mapShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  coordinates: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
});
