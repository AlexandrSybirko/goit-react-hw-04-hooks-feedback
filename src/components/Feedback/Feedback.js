import { useState } from 'react';
import Statistics from './Statistics/Statistics'
import Section from './Section/Section'
import FeedbackOptions from './FeedbackOptions/FeedbackOptions'
import Notification from './Notification/Notification'
import s from './Feedback.module.css'

const options = ['good', 'bad', 'neutral'];
export default function Feedback() {

   const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
    
    const feedbackCounter = (e) => {
        const {action} = e.target.dataset.action
       
        switch (action) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }

    }

    const countTotalFeedback = () => {
        
        return good + neutral + bad
    }
    
    const countPositiveFeedbackPercentage = () => {
       
        return good ? Math.round((good / countTotalFeedback()) * 100) : 0
    }


    
        return (
            <div className={s.feedback}>
                <Section title={'Please leave feedback'}>
                    <FeedbackOptions
                        options={options}
                        onFeedbackCounter={feedbackCounter}
                    />
                
                
</Section>
                
                <Section title={'Statistics'}>
                    {countTotalFeedback() ? (<Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positiveFeedback={countPositiveFeedbackPercentage()}
              
                    />) : (
            <Notification message="No feedback given" />
          )}
                
                    </Section>
            

            </div>
        )
    }


