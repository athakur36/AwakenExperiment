import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import VideoPlayer from '../components/video-player/videoplayer.component';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import { DV_Survey } from '../model/DV-Survey-Data';
import VideoListPage from '../components/video-list/videolistPage.component';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DVRadio from '../components/dv/dvRadio.component';
import firebase from '../firebase/firebase.utils';
import ConfirmationBiasExperiment from '../components/confirmationbias-experiment/confirmationbias-experiment.component';

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
  const [open, setOpen] = React.useState(false);
  const dvSurvey = DV_Survey[0];

  const dbRef = firebase
    .database()
    .ref('users/' + JSON.parse(localStorage.getItem('userID')));
  const experimentCondition = JSON.parse(
    localStorage.getItem('experiment_condition')
  );

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    dbRef.child('commentType').set(localStorage.getItem('commentType'));
    // Save the DV measurements in the firebase including the condition information (pro or counter)
  };

  const handleNext = () => {
    handleClose();
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const renderSwitch = (activeStep) => {
    switch (activeStep) {
      case 0:
        // return <VideoPlayer />;
        return <ConfirmationBiasExperiment />;
      case 1:
        return <VideoListPage />;
      default:
        return <div>Survey Type is Invalid</div>;
    }
  };

  return (
    <div className={classes.experimentsRoot}>
      #console.log({experimentCondition})
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
              Thank you! Now you will proceed to part-3 of the experiment.
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
              <Button
                variant='contained'
                color='primary'
                onClick={handleClickOpen}
              >
                Proceed
                {/* {activeStep === 4 - 1 ? 'Finish' : 'Proceed'} */}
              </Button>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby='form-dialog-title'
              >
                <DialogTitle id='form-dialog-title'>
                  Please answer the following questions regarding the video you
                  just watched:
                </DialogTitle>
                <DialogContent>
                  {dvSurvey.surveyData.questions.map((question, index) => (
                    <DVRadio key={'dvradio-' + index} questData={question} />
                  ))}
                </DialogContent>
                <DialogActions>
                  <Button
                    onClick={handleNext}
                    variant='contained'
                    color='primary'
                  >
                    Submit
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ExperimentsPage;
