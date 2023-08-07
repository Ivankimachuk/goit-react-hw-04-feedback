import React from 'react';
import style from './FeedbackOptions.module.css';
import PropTypes from "prop-types";


const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map((option) => (
        <button 
        key={option} 
        onClick={() => onLeaveFeedback(option)}
        className={`${style['feedback-button']} ${style[`${option.toLowerCase()}-button`]}`}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
  feedbackOptions: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};
