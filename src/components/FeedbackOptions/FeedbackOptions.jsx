import React from 'react';
import '../FeedbackOptions/FeedbackOptions.module.css';

const FeedbackOptions = ({ handleGood, handleNeutral, handleBad }) => (
  <div className="Feedback__controls">
    <button onClick={handleGood}>Good</button>
    <button onClick={handleNeutral}>Neutral</button>
    <button onClick={handleBad}>Bad</button>
  </div>
);

export default FeedbackOptions;