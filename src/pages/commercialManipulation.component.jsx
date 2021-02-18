import React from 'react';
import RatingBox from '../components/commercialRating.component';
import Button from '@material-ui/core/Button';
import { Experiment_Image_List } from '../model/Comm-Manip-Images';

const CommercialManipPage = () => {
  const [activeExper, setActiveExper] = React.useState(0);

  const handleNext = (activeExper) => {
    console.log(activeExper);
    setActiveExper((prevActiveExper) => prevActiveExper + 1);
  };

  const renderSwitch = (activeExper) => {
    const experiment = Experiment_Image_List[activeExper];
    console.log(experiment.type);
    switch(experiment.type){
      case 'RATING':
        return (
          <RatingBox
            name= {'image' + experiment.step}
            src={experiment.images}
          />
        )
        case 'PICKUP':
            return (
              <RatingBox/>
            )
    }
  }
  return (
    <div>
      {renderSwitch(activeExper)}
      <Button
        variant='contained'
        color='primary'
        onClick={handleNext}
      >Submit & Proceed</Button>
    </div>
  )
}

export default CommercialManipPage;