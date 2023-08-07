import React, { useState } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';



const App = () => {
  const [ feedback, setFeedback ] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
 

  const handleFeedback = ( option ) => {
    setFeedback((prevState) => ({
      ...prevState,
      [option]: prevState[option] + 1
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = feedback;
    const total = countTotalFeedback();
    return total ? Math.round(( good / total) * 100) : 0;
  }


    const totalFeedback = countTotalFeedback();
    const positivePercentage = countPositiveFeedbackPercentage();

    return (
      <div>
        <Section title='Please leave feedback'>
          <FeedbackOptions
            options={[ 'good','neutral','bad', ]}
            onLeaveFeedback={handleFeedback}
          />
        </Section>

        <Section title='Statistics'>
          {totalFeedback > 0 ? 
          <Statistics 
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          /> : (
            <Notification messege='There is no feedback' />
          )
          }
          
          </Section>
      </div>
    );
  
};

 export default App; 

