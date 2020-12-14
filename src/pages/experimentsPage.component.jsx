import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import VideoPlayer from '../components/video-player/videoplayer.component';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import DVSurvey from '../components/dv/dv-survey.component';
import VideoListPage from '../components/video-list/videolistPage.component';

const useStyles = makeStyles((theme) => ({
  experimentsRoot: {
    width: '100%',
    height: '100%',
    padding: '0 50px',
  },
  experimentsHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50px',
    fontSize: '22px',
    fontWeight: 'bold',
  },
  stepContent: {
    paddingBottom: '50px',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '50px',
  },
  instructions: {
    height: '300px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    fontSize: '24px',
    marginTop: '100px',
  },
}));

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
        return <DVSurvey />;
      case 2:
        return <VideoListPage />;
      case 3:
        return <DVSurvey />;
      default:
        return <div>Survey Type is Invalid</div>;
    }
  };

  return (
    <div className={classes.experimentsRoot}>
      <div className={classes.experimentsHeader}>STUDY PART 2</div>
      <Stepper activeStep={activeStep}>
        {[1, 2, 3, 4].map((stepNumber, index) => {
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
