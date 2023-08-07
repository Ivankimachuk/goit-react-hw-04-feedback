import React, { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';



class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleFeedback = ( event ) => {
    this.setState(( prevState ) => ({[ event ]: prevState[ event ] + 1 }));
  };

  countTotalFeedback = () => {
    const { good,neutral,bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total ? Math.round(( good / total) * 100) : 0;
  }


  render() {
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <Section title='Please leave feedback'>
          <FeedbackOptions
            options={[ 'good','neutral','bad', ]}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>

        <Section title='Statistics'>
          {totalFeedback > 0 ? 
          <Statistics 
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          /> : (
            <Notification messege='There is no feedback' />
          )
          }
          
          </Section>
      </div>
    );
  }
};

 export default App; 
