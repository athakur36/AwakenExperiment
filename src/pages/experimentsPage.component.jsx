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
  let noOfDVQuestions = 0;
  // @Arti Thakur - I have used the "useRef" hook, that I can use to get the reference of
  const [btnProceedDisabled, setBtnProceedDisabled] = React.useState(true);
  const [btnSubmitDisabled, setBtnSubmitDisabled] = React.useState(true);
  //const [radiCheckCounter, setRadiCheckCounter] = React.useState(0);
  let radiCheckCounter = 0;

  // @Arti - I have used the "useRef" hook, that I can use to get the reference of
  // a react component - in this case, I am associating this constant to the div
  // container (line 125)
  const container = useRef(null);
  // @Arti Thakur - I have used the useEffect hook to execute a function whenever the activeStep variable
  // is updated. So I use the div container reference and have called the "scrollIntoView()" function
  // in order to "move" the top of page to that component. :)
  useEffect(() => {
    console.log('Move to top');
    container.current.scrollIntoView();
    if (activeStep !== 4 && activeStep !== 1) {
      setBtnProceedDisabled(true);
      setBtnSubmitDisabled(true);
    }
  }, [activeStep]);

  const dbRef = firebase
    .database()
    .ref('users/' + JSON.parse(localStorage.getItem('userID')));
  const experimentCondition = JSON.parse(
    localStorage.getItem('experiment_condition')
  );

  const enableProceedButton = () => {
    console.log('button enabled called');
    // this enables the button
    setBtnProceedDisabled(false);
  };
  const enableSubmitButton = () => {
    console.log('button enabled called');
    // this enables the button
    radiCheckCounter++;
    if (radiCheckCounter === noOfDVQuestions) {
      console.log('inside');
      setBtnSubmitDisabled(false);
    }
  };

  const pushDataToDatabase = (ExperimentName, ExperimentData) => {
    // Push data into database on finish
    console.log('Pushing data to the firebase');
    dbRef.child(ExperimentName).set(ExperimentData);
    console.log('Successfully submitted!');
  };

  const handleClickOpen = () => {
    console.log(activeStep);
    if (activeStep !== 4 && activeStep !== 1) {
      setOpen(true);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleClose = () => {
    setOpen(false);
    dbRef.child('commentType').set(localStorage.getItem('commentType'));
    // Save the DV measurements in the firebase including the condition information (pro or counter)
    let ExperimentData = {
      Shared: localStorage.getItem('Shared'),
      Flagged: localStorage.getItem('Flagged'),
      Reaction: localStorage.getItem('Reaction'),
      VideoID: localStorage.getItem('VideoID'),
      Link: localStorage.getItem('Link'),
      dvData: localStorage.getItem('dvData'),
    };
    let ExperimentName = localStorage.getItem('Experiment');
    pushDataToDatabase(ExperimentName, JSON.stringify(ExperimentData)); //localStorage.getItem(ExperimentName+'Data'));
    
    let likedVideosData = localStorage.getItem('LikedVideos')
    if (likedVideosData != {} && likedVideosData != null){
      pushDataToDatabase("LikedVideos", JSON.stringify(likedVideosData));
    }
    // Clear localstorage of old data, ready for next experiement.
    localStorage.removeItem('Shared');
    localStorage.removeItem('Flagged');
    localStorage.removeItem('Reaction');
    localStorage.removeItem('VideoID');
    localStorage.removeItem('Link');
    localStorage.removeItem('dvData');
    //localStorage.removeItem('video1');
    localStorage.removeItem('LikedVideos');
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
        return (
          <ConfirmationBiasExperiment
            enableProceedButton={enableProceedButton}
          />
        );
      case 1:
        return <VideoListPage />;
      case 2:
        return (
          <PopularityBiasExperiment enableProceedButton={enableProceedButton} />
        );
      case 3:
        return (
          <NegativityBiasExperiment enableProceedButton={enableProceedButton} />
        );
      case 4:
        return <Task2 />;
      case 5:
        return (
          <CognitiveDissonanceExperiment
            enableProceedButton={enableProceedButton}
          />
        );
      default:
        return <div>Survey Type is Invalid</div>;
    }
  };

  const dialogSwitch = (activeStep) => {
    let surveyIndex = 0;
    if (activeStep === 2 || activeStep === 3 || activeStep === 5) {
      surveyIndex = activeStep - 1;
    }

    //conditional rendering of dialoue box for cognitive dissonance
    if (activeStep === 5 && experimentCondition === 1) {
      surveyIndex = activeStep - 1;
    }
    if (activeStep === 5 && experimentCondition === 0) {
      surveyIndex = activeStep - 2;
    }

    const survey = dvSurvey[surveyIndex];
    console.log('surveyIndex:', surveyIndex);
    noOfDVQuestions = Object.keys(survey.surveyData.questions).length;
    console.log('noOfDVQuestions:', noOfDVQuestions);
    return survey.surveyData.questions.map((question, index) => (
      <DVRadio
        key={'dvradio-' + index}
        questData={question}
        enableSubmitButton={enableSubmitButton}
      />
    ));
  };

  return (
    // @Arti Thakur - using the "ref" attribute we associate the "useRef" constant
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
                  disabled
                >
                  Back
                </Button>
              ) : (
                <div></div>
              )}
              <Button
                disabled={btnProceedDisabled}
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
                    disabled={btnSubmitDisabled}
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
