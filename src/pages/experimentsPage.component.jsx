import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
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
import ConfirmationBiasExperiment from '../components/exp-bussinessLogic/confirmationbias-experiment.component';
import PopularityBiasExperiment from '../components/exp-bussinessLogic/popularitybias-experiment.component';
import NegativityBiasExperiment from '../components/exp-bussinessLogic/negativitybias-experiment.component';
import CognitiveDissonanceExperiment from '../components/exp-bussinessLogic/cognitivedissonance-experiment.component';
import Task2 from '../components/task2.component';

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
  const dvSurvey = DV_Survey;

  // @Arti - I have used the "useRef" hook, that I can use to get the reference of
  // a react component - in this case, I am associating this constant to the div
  // container (line 125)
  const container = useRef(null);

  // @Arti - I have used the useEffect hook to execute a function whenever the activeStep variable
  // is updated. So I use the div container reference and have called the "scrollIntoView()" function
  // in order to "move" the top of page to that component. :)
  useEffect(() => {
    console.log('Move to top');
    container.current.scrollIntoView();
  }, [activeStep]);

  const dbRef = firebase
    .database()
    .ref('users/' + JSON.parse(localStorage.getItem('userID')));
  const experimentCondition = JSON.parse(
    localStorage.getItem('experiment_condition')
  );

  const handleClickOpen = () => {
    if (activeStep !== 1) {
      setOpen(true);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
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
        return <ConfirmationBiasExperiment />;
      case 1:
        return <VideoListPage />;
      case 2:
        return <PopularityBiasExperiment />;
      case 3:
        return <NegativityBiasExperiment />;
      case 4:
        return <Task2 />;
      case 5:
        return <CognitiveDissonanceExperiment />;
      default:
        return <div>Survey Type is Invalid</div>;
    }
  };

  const dialogSwitch = (activeStep) => {
    let surveyIndex = 0;

    if (activeStep >= 2) {
      surveyIndex = activeStep - 1;
    }
    //conditional rendering of dialoue box for cognitive dissonance
    if (activeStep === 5 && experimentCondition === 1) {
      surveyIndex = activeStep;
    }

    const survey = dvSurvey[surveyIndex];
    return survey.surveyData.questions.map((question, index) => (
      <DVRadio key={'dvradio-' + index} questData={question} />
    ));
  };

  return (
    // @Arti - using the "ref" attribute we associate the "useRef" constant
    // with the page component.
    <div ref={container} className={classes.experimentsRoot}>
      <div className={classes.experimentsHeader}>STUDY PART 2</div>
      <Stepper activeStep={activeStep}>
        {[1, 2, 3, 4, 5, 6].map((stepNumber, index) => {
          return (
            <Step key={'step-' + index}>
              <StepLabel />
            </Step>
          );
        })}
      </Stepper>
      <div className={classes.stepContent}>
        {activeStep === 6 ? (
          <div className={classes.instructions}>
            <div>
              Thank you! Now you will proceed to part-3 of the experiment.
            </div>
            <Link to='/dashboard'>
              <Button variant='contained' color='primary'>
                PROCEED TO RESULT DASHBOARD
              </Button>
            </Link>
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
                  fullWidth={true}
                  maxWidth='md'
                >
                  <DialogTitle id='form-dialog-title'>
                    Please answer the following questions regarding the video you
                    just watched:
                </DialogTitle>
                  <DialogContent>{dialogSwitch(activeStep)}</DialogContent>
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
