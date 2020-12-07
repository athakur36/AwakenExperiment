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
});

const LikertMatrix = ({ questData }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p className={classes.intro}>{questData.intro}</p>
      <h3>Likert Matrix</h3>
      <form>
        {questData.questions.map((question, index) => (
          <QNA key={index} label={question} />
        ))}
      </form>
    </div>
  );
};

export default LikertMatrix;
