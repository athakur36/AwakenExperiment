import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  qnaRoot: {
    marginBottom: '20px',
  },
}));

const QNA = ({ label, onAnswerChange }) => {
  const classes = useStyles();

  return (
    <div className={classes.qnaRoot}>
      <label>{label}</label>
      <TextField
        variant='outlined'
        fullWidth
        onChange={(e) => onAnswerChange(e.target.value)}
      />
    </div>
  );
};

export default QNA;
