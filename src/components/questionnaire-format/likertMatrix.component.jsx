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

const LikertMatrix = ({ questData }) => {
  const classes = useStyles();
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
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
        <div className={classes.header}>
          <div className={classes.firstColumn}>{question.text}</div>
          <div className={classes.secondColumn}>
            <div className={classes.secondColumnItem}>
              <Radio
                onChange={handleChange}
                value='a'
                name='radio-button-demo'
                inputProps={{ 'aria-label': 'A' }}
              />
            </div>
            <div className={classes.secondColumnItem}>
              <Radio
                onChange={handleChange}
                value='b'
                name='radio-button-demo'
                inputProps={{ 'aria-label': 'B' }}
              />
            </div>
            <div className={classes.secondColumnItem}>
              <Radio
                onChange={handleChange}
                value='c'
                name='radio-button-demo'
                inputProps={{ 'aria-label': 'C' }}
              />
            </div>
            <div className={classes.secondColumnItem}>
              <Radio
                onChange={handleChange}
                value='d'
                name='radio-button-demo'
                inputProps={{ 'aria-label': 'D' }}
              />
            </div>
            <div className={classes.secondColumnItem}>
              <Radio
                onChange={handleChange}
                value='e'
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
