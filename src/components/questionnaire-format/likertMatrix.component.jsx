import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import QNA from '../question-type/qna.component';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

const useStyles = makeStyles({
  root: {},
  intro: {
    marginBottom: '50px',
  },
  submit: {
    marginTop: '50px',
    marginBottom: '150px',
  },
  header: {
    width: '100%',
    display: 'flex',
  },
  firstColumn: {
    minWidth: '300px',
    height: '100%',
    width: '30%',
  },
  secondColumn: {
    display: 'flex',
    textAlign: 'center',
    width: '70%',
  },
  secondColumnItem: {
    flex: 1,
    lineBreak: 'auto',
  },
});

const survey2Data = {};
const survey3Data = {};
const survey4Data = {};

const LikertMatrix = ({ questData }) => {
  const classes = useStyles();
  const [selectedValue, setSelectedValue] = React.useState('');

  const saveAnswer = (answer, id) => {
    // Test printing to see output on console. Can delete.
    //console.log(answer);
    //console.log('id is: ' + id);

    // Make key-value pairs in dictionary, id is question.id from IV-Surveys-Data.js.
    // answer is event value.
    // store into localStorage in the corrosponding survey object
    if (id.startsWith('2')) {
      survey2Data[id] = answer;
      localStorage.setItem('Survey2', JSON.stringify(survey2Data));
    } else if (id.startsWith('3-')) {
      survey3Data[id] = answer;
      localStorage.setItem('Survey3', JSON.stringify(survey3Data));
    } else if (id.startsWith('4-')) {
      survey4Data[id] = answer;
      localStorage.setItem('Survey4', JSON.stringify(survey4Data));
    }
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    saveAnswer(event.target.value, event.target.id);
  };

  return (
    <div className={classes.root}>
      <p className={classes.intro}>{questData.intro}</p>
      <div className={classes.header}>
        <div className={classes.firstColumn}></div>
        <div className={classes.secondColumn}>
          <div className={classes.secondColumnItem}>Strongly disagree</div>
          <div className={classes.secondColumnItem}>Disagree</div>
          <div className={classes.secondColumnItem}>
            Neither agree nor disagree
          </div>
          <div className={classes.secondColumnItem}>Agree</div>
          <div className={classes.secondColumnItem}>Strongly agree</div>
        </div>
      </div>
      {questData.questions.map((question, index) => (
        <div className={classes.header} key={question.id}>
          <div className={classes.firstColumn}>{question.text}</div>
          <div className={classes.secondColumn}>
            <div className={classes.secondColumnItem}>
              <Radio
                color='primary'
                onChange={handleChange}
                value='1'
                id={question.id}
                name='radio-button-demo'
                inputProps={{ 'aria-label': 'A' }}
              />
            </div>
            <div className={classes.secondColumnItem}>
              <Radio
                color='primary'
                onChange={handleChange}
                value='2'
                id={question.id}
                name='radio-button-demo'
                inputProps={{ 'aria-label': 'B' }}
              />
            </div>
            <div className={classes.secondColumnItem}>
              <Radio
                color='primary'
                onChange={handleChange}
                value='3'
                id={question.id}
                name='radio-button-demo'
                inputProps={{ 'aria-label': 'C' }}
              />
            </div>
            <div className={classes.secondColumnItem}>
              <Radio
                color='primary'
                onChange={handleChange}
                value='4'
                id={question.id}
                name='radio-button-demo'
                inputProps={{ 'aria-label': 'D' }}
              />
            </div>
            <div className={classes.secondColumnItem}>
              <Radio
                color='primary'
                onChange={handleChange}
                value='5'
                id={question.id}
                name='radio-button-demo'
                inputProps={{ 'aria-label': 'E' }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LikertMatrix;
