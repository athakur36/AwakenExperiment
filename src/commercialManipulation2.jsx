import React from 'react';
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
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//import classes from '*.module.css';
import ScrollToTop from "react-scroll-to-top";
import { ReactComponent as MySVG } from "./logo.png";

const useStyles = makeStyles((theme) => ({
  comRoot: {
    width: '100%',
    height: '100%',
    padding: '0 50px',
  },
  backButton: {
    marginRight: theme.spacing(1),
    //display: 'flex',
    //justifyContent: 'space-between',
    //marginTop: '50px',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    height: '300px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    fontSize: '24px',
    marginTop: '100px',
  },
}));

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return (
        <div> 
          <img src={Pen1} alt="pen1" height = '50%' width = '75%'/>
            <p>Please rate the price</p>
            <Rating key = '1'/>
            <p/>
            
            <img src={Pen2} alt="pen2" height = '50%' width = '75%'/>
            <p>Please rate the price</p>
            <Rating key = '2'/>
            <p/>
            <img src={Pen3} alt="pen3" height = '50%' width = '75%'/>
            <p>Please rate the price</p>
            <Rating key = '3'/>
        </div>
            
      );
    case 1:
      return (
        <Box textAlign='center'>
            <img src={Flash1} alt="flash1" height= "50%" width="75%" />
            <p>Please rate the price</p>
            <Rating key = '4'/>
            <p></p>

            <img src={Flash2} alt="flash2" height= "50%" width="75%" />
            <p>Please rate the price</p>
            <Rating key = '5'/>
            <p></p>

            <img src={Flash3} alt="flash3" height= "50%" width="75%" />
            <p>Please rate the price</p>
            <Rating key = '6'/>
        </Box>
      );
    case 2:
      return (
      <div>
        <img src={Oven1} alt="oven1" height= "50%" width="75%" />
        <p>Please rate the price</p>
        <Rating key = '7'/>
        <p></p>

        <img src={Oven2} alt="oven2" height= "50%" width="75%" />
        <p>Please rate the price</p>
        <Rating key = '8'/>
        <p></p>

        <img src={Oven3} alt="oven3" height= "50%" width="75%" />
        <p>Please rate the price</p>
        <Rating key = '9'/>
      </div>
    );
    default:
      return 'Unknown stepIndex';
  }
}

function getSteps() {
  return ['Please rate these pens', 'Please rate these flash drives', 'Please rate these ovens'];
}
export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.comRoot}>   
    <ScrollToTop /> 
    <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div> 
            <Typography className={classes.comRoot}>{getStepContent(activeStep)}</Typography>
            <div>
                <Box textAlign='right'>
                    <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
                </Box>
              
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


