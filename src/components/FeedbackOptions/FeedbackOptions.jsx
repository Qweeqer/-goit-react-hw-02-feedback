import React from 'react';
import PropTypes from 'prop-types';

import '../FeedbackOptions/FeedbackOptions.module.css';

const FeedbackOptions = ({ handleGood, handleNeutral, handleBad }) => (
  <div className="feedbackBtn">
    <button onClick={handleGood}>Good</button>
    <button onClick={handleNeutral}>Neutral</button>
    <button onClick={handleBad}>Bad</button>
  </div>
);

FeedbackOptions.propTypes = {
  handleGood: PropTypes.any,
  handleNeutral: PropTypes.any,
  handleBad: PropTypes.any,
};

export default FeedbackOptions;
