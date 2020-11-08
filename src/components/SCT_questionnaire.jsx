import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {  Card, TextField, Button } from '@material-ui/core';
import QNA from '../components/sct_qna.component'
import * as Colors from '../constants/colors';

// define CSS styles
const useStyles = makeStyles({
    intro: {
        marginBottom: '50px',
    },
    submitBtn: {
        marginTop: '50px',
        marginBottom: '150px',
        float: 'right',
    },
    form:{
        background: Colors.BACKGROUND,
    }
  });

const Sct = ({SCTquestdata}) => {
    const classes = useStyles();

    return (
        <div className= {classes.form}>
            <p className={classes.intro}>{SCTquestdata.intro}</p>
            <form >
                {SCTquestdata.questions.map((question)=>(
                <QNA label={question} />))}
                
            </form>
            <Button className= {classes.submitBtn} variant="contained" color='primary'>Submit and Proceed</Button>
        </div>
    )
    }
export default Sct;
