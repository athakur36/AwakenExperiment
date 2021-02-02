import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import QNA from '../question-type/qna.component';
import QNRadio from '../question-type/qnradio.component';
import { forwardRef, useRef, useImperativeHandle } from 'react';

const useStyles = makeStyles({
  root: {},
  intro: {
    marginBottom: '50px',
  },
  submit: {
    marginTop: '50px',
    marginBottom: '150px',
  },
});
// pass the survey1data to parent
const survey1Data = {};

const renderSwitch = (question) => {
  switch (question.type) {
    case 'SCT':
      return (
        <QNA
          label={question.text}
          onAnswerChange={(answer) => saveAnswer(answer, question.id)}
        />
      );
    case 'RADIO':
      return <QNRadio question={question} />;
    default:
      return <div>Survey Type is Invalid</div>;
  }
};
const savePagedata = () => {
  localStorage.setItem('SCT', survey1Data);
};
const saveAnswer = (answer, id) => {
  //save this answer in a big page object which will be saved in session storage on submit button
  console.log(answer);
  console.log(id);
  // survey1Data.push({ id: answer });
  survey1Data[id] = answer;
  // pageData.push(new Answer)
  // var pageData = {1 : 'khsdkaksjhdkash', 2: 'jhsgdjasg'};
};

const Sct = ({ questData }, ref) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p className={classes.intro}>{questData.intro}</p>
      <h3>Please answer the following:</h3>
      <form>
        {questData.questions.map((question, index) => (
          <div key={'question-' + index}>{renderSwitch(question)} </div>
        ))}
      </form>
    </div>
  );
};

export default Sct;
