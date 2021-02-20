import React from 'react';
import RatingBox from '../components/commercialRating.component';
import Button from '@material-ui/core/Button';
import { Experiment_Image_List } from '../model/Comm-Manip-Images';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  experimentsRoot: {
    width: '100%',
    height: '100%',
    padding: '0 50px',
  },
  button: {
    float: 'right',
    marginRight: '30px',
  }
}));

const CommercialManipPage = () => {
  const classes = useStyles();
  const [activeExper, setActiveExper] = React.useState(0);
  console.log(activeExper);

  const handleNext = (activeExper) => {
    console.log(activeExper);
    setActiveExper((prevActiveExper) => prevActiveExper + 1);
  };

  const renderSwitch = (activeExper) => {
    const experiment = Experiment_Image_List[activeExper].experiment;
    switch(experiment.type){
      case 'RATING':
        return (experiment.images.map((e, key) => (
          <RatingBox
            name={'image' + Math.floor(Math.random() * Math.floor(1000))}
            photo= {e.src}
            key={key}
          />
        )))
        case 'PICKUP':
            return (
              //change this to new component
              <RatingBox/>
            )
    }
  }
  return (
    <div className={classes.experimentsRoot}>
      {renderSwitch(activeExper)}
      {
        <Button
        className = {classes.button}
        variant='contained'
        color='primary'
        onClick={handleNext}
        >
        {activeExper === Experiment_Image_List.length - 1
          ? 'Finish'
          : 'Proceed'}
      </Button>
    }
    </div>
  )
}

export default CommercialManipPage;