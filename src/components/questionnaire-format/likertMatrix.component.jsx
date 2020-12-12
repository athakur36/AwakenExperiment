import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import QNA from '../question-type/qna.component';

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
    border: '1px red solid',
    width: '30%',
  },
  secondColumn: {
    display: 'flex',
    textAlign: 'center',
    width: '70%',
  },
  secondColumnItem: {
    flex: 1,
    border: '1px solid blue',
    lineBreak: 'anywhere',
  },
});

const LikertMatrix = ({ questData }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p className={classes.intro}>{questData.intro}</p>
      <div className={classes.header}>
        <div className={classes.firstColumn}></div>
        <div className={classes.secondColumn}>
          <div className={classes.secondColumnItem}>first</div>
          <div className={classes.secondColumnItem}>second</div>
          <div className={classes.secondColumnItem}>third</div>
          <div className={classes.secondColumnItem}>fourth</div>
          <div className={classes.secondColumnItem}>fifth</div>
        </div>
      </div>
      {questData.questions.map((question, index) => (
        <div className={classes.header}>
          <div className={classes.firstColumn}>{question.text}</div>
          <div className={classes.secondColumn}>
            <div className={classes.secondColumnItem}>first-button</div>
            <div className={classes.secondColumnItem}>second-button</div>
            <div className={classes.secondColumnItem}>third-button</div>
            <div className={classes.secondColumnItem}>fourth-button</div>
            <div className={classes.secondColumnItem}>fifth-button</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LikertMatrix;
