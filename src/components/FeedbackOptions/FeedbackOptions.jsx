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

Notification.propTypes = {
  handleGood: PropTypes.string,
  handleNeutral: PropTypes.string,
  handleBad: PropTypes.string,
};

export default FeedbackOptions;
