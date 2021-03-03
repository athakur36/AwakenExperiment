import React, { useEffect } from 'react';
import RatingBox from '../components/commercialRating.component';
import ButtonBox from '../components/commercialButton.component';
import Button from '@material-ui/core/Button';
import { Experiment_Image_List } from '../model/Comm-Manip-Images';
import { makeStyles } from '@material-ui/core/styles';
import { shuffle } from 'lodash';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

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
  button: {
    float: 'right',
    //marginRight: '30px',
    marginRight: theme.spacing(1),
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
    paddingBottom: '70px',
  },
  stepContent: {
    paddingBottom: '70px',
  },
}));

const CommercialManipPage = () => {
  const classes = useStyles();

  const experimentCondition = JSON.parse(
    localStorage.getItem('experiment_condition')
  );
  const [activeExper, setActiveExper] = React.useState(0);
  const steps = getSteps();
  const [disabled, setDisabled] = React.useState(true);
  

  
  //scroll to top of page on reload
  const picRef = React.createRef();
  useEffect(() => {
    picRef.current.scrollIntoView();
  }, [activeExper]);


  let imageIndex = 0;
  if (experimentCondition === 1) {
    imageIndex = 1;
  }
  function getSteps() {
    return ['', '', ''];
  }
  const handleBack = () => {
    setActiveExper((prevActiveStep) => prevActiveStep - 1);
  };

  const handleNext = (activeExper) => {
    setActiveExper((prevActiveExper) => prevActiveExper + 1);
  };

  const renderSwitch = (activeExper) => {
    const experiment = Experiment_Image_List[imageIndex][activeExper].experiment;
    switch (experiment.type) {
      case 'RATING':
        return (shuffle(experiment.images).map((e, key) => (
          <RatingBox
            name={'image' + Math.floor(Math.random() * Math.floor(1000))}
            photo={e.src}
            key={key}
            setDisabled={setDisabled}
            disabled={disabled}
          />
        )))
      case 'PICKUP':
        return (experiment.images.map((e, key) => (
          <ButtonBox
            name={'image'}
            photo={e.src}
            text={e.text}
            key={key}
          />
        )))
    }
  }
  return (
    <div ref={picRef} className={classes.experimentsRoot}>
      <div className={classes.experimentsHeader}>STUDY PART </div>
        <Stepper activeStep={activeExper}>
          {Experiment_Image_List[imageIndex].map((experiment, index) => {
            return (
              <Step key={'step-' + activeExper + ':' + index}>
                <StepLabel />
              </Step>
            );
          })}
        </Stepper>
        <div className={classes.stepContent}>
          {renderSwitch(activeExper)}
          {
            <Button
              className={classes.button}
              variant='contained'
              color='primary'
              onClick={handleNext}
              disabled={disabled}
            >
              {activeExper === Experiment_Image_List[imageIndex].length - 1
                ? 'Finish'
                : 'Proceed'}
            </Button>
          }
      </div>
    </div>
  )
}

export default CommercialManipPage;