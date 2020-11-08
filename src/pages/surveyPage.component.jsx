import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import Sct from "../components/SCT_questionnaire"
 
const useStyles = makeStyles({
  surveyRoot: {
    width: '100%',
    height: '100%',
    display: 'flex',
    padding: '50px',
  },
});
// put all the survey questions here in the form of dictionary
// these dictionary objects are passed as props to corrosponding component rendering the questionnaire
// SCTquestdata are the questionnaire to assess IV: ego development level
const SCTquestdata = {
  intro : 'This study examines the relationship between digital conduct and the mind, in terms of meaning-making, outlooks on life, self-awareness, and consciousness traits, etc.Therefore, it is important that you are in the right mindset. Please plan for the appropriate space and time. It takes about 45 min. Please take the entire inventory when you are rested and not rushed, with no interruptions, in one sitting. Please also make sure that the responses communicate your authentic inner experience, not some superficial clichés. Your responses will be treated with the highest confidentially. The exercise has 3 parts: open-ended sentence completions, multiple-choice questions, and social media interactions. We start with an invitation for self-reflection, which asks you to complete 16 incomplete sentences thoughtfully and honestly with your own words. There are no right or wrong responses. No need to write an essay for each: completing the sentence with some 4-12 words is enough' ,
  questions : ['Raising a family...', 
                      'When I am criticized...', 
                      'Being with other people...', 
                      'The thing I like about myself is...',
                      'What gets me into trouble is...',
                      'Rules are...',
                      'Crime and delinquency could be halted if...',
                      'Business and society...',
                      'I just can’t stand people who...',
                      'I am ...',
                      'My main problem is...',
                      'People who step out of line...',
                      'A partner has the right to...',
                      'If I were in charge...',
                      'Technology...',
                      'My conscience bothers me if...'
                  ]
              }
  

// passing the survey question dictionary object to the coponent for rendering
const SurveyPage = ({ match }) => {
  const classes = useStyles();

  return (
    <div className= {classes.surveyRoot}>
      <Sct SCTquestdata = {SCTquestdata} /> 
    </div>
  );
};

export default withRouter(SurveyPage);
