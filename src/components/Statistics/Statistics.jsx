import React from "react";
import PropTypes from "prop-types";
import style from "./Statistics.module.css"

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={style.statisticsBlock}>
      <p className={style.statisticsGood}>Good: {good}</p>
      <p className={style.statisticsNeutral}>Neutral: {neutral}</p>
      <p className={style.statisticsBad}>Bad: {bad}</p>
      <p className={style.statistics}>Total: {total}</p>
      <p className={style.statistics}>Positive feedback: {positivePercentage}%</p>
    </div>
  )
};
export default Statistics;


Statistics.propTapes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
