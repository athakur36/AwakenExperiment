import React, { Component } from 'react';
import Pen1 from './pen1.png';
import Pen2 from './pen2.png';
import Pen3 from './pen3.png';
import Flash1 from './flash1.png'
import Flash2 from './flash2.png'
import Flash3 from './flash3.png'
import Oven1 from './oven1.png'
import Oven2 from './oven2.png'
import Oven3 from './oven3.png'
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
//import {Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const tutorialSteps = [
    {
      label: 'Please rate this price',
      imgPath: Pen1,
    
    },
    {
      label: 'Please rate this price',
      imgPath: Pen2,
    },
    {
      label: 'Please rate this price',
      imgPath: Pen3,
    },
    {
      label: 'Please rate this price',
      imgPath: Oven1,
    },
    {
        label: 'Please rate this price',
        imgPath:Oven2,
    },
    {
        label: 'Please rate this price',
        imgPath: Oven3,
    },
    {
        label: 'Please rate this price',
        imgPath: Flash1,
    },
    {
        label: 'Please rate this price',
        imgPath:Flash2,
    },
    {
        label: 'Please rate this price',
        imgPath:Flash3,
    },
  ];

  const firstStep =[
    {
        label: 'Please rate this price',
        imgPath: Pen1,
      
      },
      {
        label: 'Please rate this price',
        imgPath: Oven1,
      },
      {
        label: 'Please rate this price',
        imgPath: Flash1,
      },
  ];
  const secondStep =[
    {
        label: 'Please rate this price',
        imgPath: Pen2,
      
      },
      {
        label: 'Please rate this price',
        imgPath: Oven2,
      },
      {
        label: 'Please rate this price',
        imgPath: Flash2,
      },
  ];
  const thirdStep =[
    {
        label: 'Please rate this price',
        imgPath: Pen3,
      
      },
      {
        label: 'Please rate this price',
        imgPath: Oven3,
      },
      {
        label: 'Please rate this price',
        imgPath: Flash3,
      },
  ];

  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: '50%',
      flexGrow: 1,
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      height: 50,
      paddingLeft: theme.spacing(4),
      backgroundColor: theme.palette.background.default,
    },
    img: {
      height: '100%',
      //maxWidth: 400,
      overflow: 'hidden',
      display: 'block',
      width: '100%',
    },
  }));
  export default function TextMobileStepper() {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = tutorialSteps.length;
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
        return ( 
            <div className={classes.root}>
                 <Box textAlign='center'>
                    <img src={Pen1} alt="pen1" height= "20%" width="20%" />
                    <p>Please rate the price 1</p>
                    <Rating />
                </Box>
                
                <p></p>
                
                
                <Box textAlign='center'>
                    <img src={Pen2} alt="pen2" height= "20%" width="20%" />
                    <p>Please rate the price 2</p>
                    <Rating />
                </Box>
                
                <p></p>
                <Box textAlign='center'>
                    <img src={Pen1} alt="pen1" height= "20%" width="20%" />
                    <p>Please rate the price 1</p>
                    <Rating />
                    <p>please ignore</p>
                </Box>
                
                <p></p>
                
                
                <Box textAlign='center'>
                    <img src={Pen2} alt="pen2" height= "20%" width="20%" />
                    <p>Please rate the price 2</p>
                    <Rating />
                </Box>
                
                <p></p>
                
                <Box textAlign='center'>
                    <img src={Pen3} alt="pen1" height= "20%" width="20%" />
                    <p>Please rate the price 3</p>
                    <Rating />
                </Box>
                
                <img
                className={classes.img}
                src={firstStep[activeStep].imgPath}
                alt={firstStep[activeStep].label}
                height = "100%"
                width = '100%'
                />
                <Box textAlign='center'>
                <Paper className={classes.header}>
                    <p>Please rate the price</p>
                    <Rating />
                </Paper>
                
                    
                </Box>
                <img
                className={classes.img}
                src={secondStep[activeStep].imgPath}
                alt={secondStep[activeStep].label}
                height = "100%"
                width = '100%'
                />
                <Box textAlign='center'>
                 <Paper className={classes.header}>
                    <Typography>{secondStep[activeStep].label}</Typography>
                </Paper>
                
                    <Rating />
                </Box>
                <img
                className={classes.img}
                src={thirdStep[activeStep].imgPath}
                alt={thirdStep[activeStep].label}
                height = "100%"
                width = '100%'
                />
                <Box textAlign='center'>
                 <Paper className={classes.header}>
                    <Typography>{thirdStep[activeStep].label}</Typography>
                </Paper>
                
                    <Rating />
                </Box>
                <MobileStepper
                steps={'3'}
                position="static"
                variant="text"
                activeStep={activeStep}
                nextButton={
                    <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                    Next
                    {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                    {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                    Back
                    </Button>
                }
                />

            </div>
         );
    }
