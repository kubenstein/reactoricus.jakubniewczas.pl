import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const MovementEditor = ({ className, algorythm }) => (
  <div className={className} styleName="wrapper">
    <div styleName="hScrollable">
      {algorythm.map(step => (
        <div key={step.id} />
      ))}
    </div>
  </div>
);

MovementEditor.propTypes = {
  className: PropTypes.string,
  algorythm: PropTypes.arrayOf(PropTypes.any), // add step shape
};

export default MovementEditor;
