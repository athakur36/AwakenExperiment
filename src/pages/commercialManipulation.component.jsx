import React, { useEffect } from 'react';
import RatingBox from '../components/commercialRating.component';
import ButtonBox from '../components/commercialButton.component';
import Button from '@material-ui/core/Button';
import { Experiment_Image_List } from '../model/Comm-Manip-Images';
import { makeStyles } from '@material-ui/core/styles';
import { shuffle } from 'lodash';

const useStyles = makeStyles((theme) => ({
  experimentsRoot: {
    width: '100%',
    height: '100%',
    paddingBottom: '50px',
  },
  button: {
    float: 'right',
    marginRight: '30px',
  },
}));

const CommercialManipPage = () => {
  const classes = useStyles();
  const experimentCondition = JSON.parse(
    localStorage.getItem('experiment_condition')
  );
  const [activeExper, setActiveExper] = React.useState(0);

  //scroll to top of page on reload
  const picRef = React.createRef();
  useEffect(() => {
    picRef.current.scrollIntoView();
  }, [activeExper]);


  let imageIndex = 0;
  if (experimentCondition === 1) {
    imageIndex = 1;
  }

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
      {renderSwitch(activeExper)}
      {
        <Button
          className={classes.button}
          variant='contained'
          color='primary'
          onClick={handleNext}
        >
          {activeExper === Experiment_Image_List[imageIndex].length - 1
            ? 'Finish'
            : 'Proceed'}
        </Button>
      }
    </div>
  )
}

export default CommercialManipPage;