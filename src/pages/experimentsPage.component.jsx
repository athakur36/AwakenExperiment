import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import VideoPlayer from '../components/video-player/videoplayer.component';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({});

const ExperimentsPage = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const renderSwitch = (activeStep) => {
    switch (activeStep) {
      case 0:
        return <VideoPlayer />;
      case 1:
        return <VideoPlayer />;
      case 2:
        return <VideoPlayer />;
      case 3:
        return <VideoPlayer />;
      default:
        return <div>Survey Type is Invalid</div>;
    }
  };

  return (
    <div>
      <Stepper activeStep={activeStep}>
        {[1, 2, 3, 4].map((ivSurvey, index) => {
          return (
            <Step key={'step-' + index}>
              <StepLabel />
            </Step>
          );
        })}
      </Stepper>

      <div className={classes.stepContent}>
        {activeStep === 4 ? (
          <div className={classes.instructions}>
            <div>
              Thank you! Now you will proceed to part-2 of the experiment.
            </div>
          </div>
        ) : (
          <>
            {renderSwitch(activeStep)}
            <div className={classes.buttons}>
              {activeStep !== 0 ? (
                <Button
                  variant='contained'
                  color='primary'
                  onClick={handleBack}
                >
                  Back
                </Button>
              ) : (
                <div></div>
              )}
              <Button variant='contained' color='primary' onClick={handleNext}>
                {activeStep === 4 - 1 ? 'Finish' : 'Proceed'}
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ExperimentsPage;
