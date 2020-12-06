import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import QNA from './qna.component';
import * as Colors from '../constants/colors';

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

const QSct = ({ questData }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p className={classes.intro}>{questData.intro}</p>
      <h3>Please answer the following:</h3>
      <form>
        {questData.questions.map((question) => (
          <QNA label={question} />
        ))}
      </form>
      <Button className={classes.submit} color='primary' variant='contained'>
        Submit and Proceed
      </Button>
    </div>
  );
};

export default QSct;
