import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  qnaRoot: {
    marginBottom: '20px',
  },
}));

const QNRadio = ({ question }) => {
  const { text, scale } = question;
  const classes = useStyles();

  return (
    <div className={classes.qnaRoot}>
      <label>{text}</label>
      <TextField variant='outlined' fullWidth />
    </div>
  );
};

export default QNRadio;
