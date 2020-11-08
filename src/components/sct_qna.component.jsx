import React from 'react';
import {TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    qnaroot: {
      margin: '20px',
    }
  });
const QNA = ({label}) =>{
const classes = useStyles();
return (
    <div className = {classes.qnaroot}>
        <label>{label}</label> <br/>
        <TextField variant= 'outlined' fullWidth/>
    </div>
)
}

export default QNA;