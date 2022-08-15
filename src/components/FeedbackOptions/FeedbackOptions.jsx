import React from 'react';
import PropTypes from 'prop-types';

import '../FeedbackOptions/FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onBtnClick }) => {
  return (
    <div className="feedbackBtn">
      {options.map(key => {
        return (
          <button key={key} type="button" onClick={() => onBtnClick(key)}>
            {key}
          </button>
        );
      })}
      {/* <button onClick={handleGood}>Good</button>
    <button onClick={handleNeutral}>Neutral</button>
    <button onClick={handleBad}>Bad</button> */}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onBtnClick: PropTypes.func.isRequired,
  // handleGood: PropTypes.any,
  // handleNeutral: PropTypes.any,
  // handleBad: PropTypes.any,
};

export default FeedbackOptions;
