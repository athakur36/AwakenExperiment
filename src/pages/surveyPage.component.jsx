import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import Sct from '../components/questionnaire-format/sct.component';
import { IV_Surveys } from '../model/IV-Surveys-Data';
import LikertMatrix from '../components/questionnaire-format/likertMatrix.component';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import { useContext } from 'react';
import { UserContext } from './../constants/context.component';
import firebase from '../firebase/firebase.utils';

const useStyles = makeStyles((theme) => ({
  surveyRoot: {
    width: '100%',
    height: '100%',
    padding: '0 50px',
  },
  surveyHeader: {
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

const SurveyPage = ({ match }) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const user = useContext(UserContext);

  let urlElements = window.location.href.split('/');
  let userID = urlElements[4];
  const dbRef = firebase.database().ref('users/' + userID);

  const pushDataToDatabase = (Survey1, Survey2, Survey3, Survey4) => {
    // Push user answers into database on finish
    if (activeStep === IV_Surveys.length - 1) {
      // compute vaccine attitue and push data to db
      console.log('Pushing data to the firebase');
      dbRef.child('Survey1').set(Survey1);
      dbRef.child('Survey2').set(Survey2);
      dbRef.child('Survey3').set(Survey3);
      dbRef.child('Survey4').set(Survey4);
      console.log('Successfully submitted!');
    }
  };
  const computeAttitudeandExpcondition = () => {
    console.log('computing vaccine attitude');
    let Survey4 = JSON.parse(localStorage.getItem('Survey4'));
    let vaccine_attitude = 0;
    let sum = 0;
    const experimentCondition = Math.floor(Math.random() * Math.floor(2));
    for (var el in Survey4) {
      if (Survey4.hasOwnProperty(el)) {
        sum += parseFloat(Survey4[el]);
      }
    }
    vaccine_attitude = sum / 4 >= 3 ? 1 : 0;
    localStorage.setItem('vaccine_attitude', JSON.stringify(vaccine_attitude));
    localStorage.setItem(
      'experiment_condition',
      JSON.stringify(experimentCondition)
    );
    console.log(vaccine_attitude);
    console.log(typeof Survey4);
  };
  const handleNext = (activeStep) => {
    let Survey1 = localStorage.getItem('Part1FreeResponse');
    let Survey2 = localStorage.getItem('Survey2');
    let Survey3 = localStorage.getItem('Survey3');
    let Survey4 = localStorage.getItem('Survey4');

    console.log(activeStep);
    console.log('IV_Surveys.length:' + IV_Surveys.length);

    pushDataToDatabase(Survey1, Survey2, Survey3, Survey4);

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const renderSwitch = (activeStep) => {
    const ivSurvey = IV_Surveys[activeStep];
    switch (ivSurvey.surveyType) {
      case 'SCT_SURVEY':
        return (
          <Sct
            key={'survey-' + ivSurvey.step}
            questData={ivSurvey.surveyData}
          />
        );
      case 'LIKERT_MATRIX_SURVEY':
        return (
          <LikertMatrix
            key={'likert-' + ivSurvey.step}
            questData={ivSurvey.surveyData}
          />
        );
      default:
        return <div>Survey Type is Invalid</div>;
    }
  };

  return (
    <div className={classes.surveyRoot}>
      <div className={classes.surveyHeader}>STUDY PART 1</div>
      <Stepper activeStep={activeStep}>
        {IV_Surveys.map((ivSurvey, index) => {
          return (
            <Step key={'step-' + activeStep + ':' + index}>
              <StepLabel />
            </Step>
          );
        })}
      </Stepper>
      <div className={classes.stepContent}>
        {activeStep === IV_Surveys.length ? (
          <div className={classes.instructions}>
            <div>
              Thank you! Now you will proceed to part-2 of the experiment.
            </div>
            <div>Please press Proceed To Part-2.</div>
            <Link to='/experiments'>
              <Button
                variant='contained'
                color='primary'
                onClick={computeAttitudeandExpcondition}
              >
                PROCEED TO PART 2
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
              {
                <Button
                  variant='contained'
                  color='primary'
                  onClick={handleNext}
                >
                  {activeStep === IV_Surveys.length - 1
                    ? 'Finish'
                    : 'Submit & Proceed'}
                </Button>
              }
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default withRouter(SurveyPage);
