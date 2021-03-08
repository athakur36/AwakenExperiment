import React from 'react';
import RatingBox from '../components/rating-box';
import Button from '@material-ui/core/Button';
import { Experiment_Image_List } from '../model/Experiment-Image-List';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import ScrollToTop from "react-scroll-to-top";


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
        marginRight: '30px',
    }
}));

function getSteps() {
    return ['rate pens', 'rate flash drives', 'rate ovens'];
}

const CommercialManipulation = () => {
    const classes = useStyles();
    const [activeExper, setActiveExper] = React.useState(0);
    console.log(activeExper);
    const steps = getSteps();

    /*for Experiment 1: if user should see the $5.00 pen, not the $4.99, set activeExper to 2
    if(activeExper === 0 && user should be in group 2) {
      setActiveExper((prevActiveExper) => prevActiveExper + 1);
    }*/

    const handleNext = (activeExper) => {
        console.log(activeExper);
        setActiveExper((prevActiveExper) => prevActiveExper + 1);
    };

    const handleBack = (activeExper) => {
        console.log(activeExper);
        setActiveExper((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveExper(0);
    };

    const renderSwitch = (activeExper) => {
        const experiment = Experiment_Image_List[activeExper].experiment;
        //console.log(activeExper);
        switch (experiment.type) {
            case 'RATING':
                return (experiment.images.map((e, key) => (
                    <RatingBox
                        name={'image' + key}
                        photo={e.src}
                    />
                )))
            case 'PICKUP':
                return (
                    <RatingBox />
                )
        }
    }
    return (

        <div className={classes.experimentsRoot}>

            <div className={classes.experimentsHeader}>STUDY PART3</div>
            {/*<ScrollToTop>*/}
            <Stepper activeExpr={activeExper} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>


            {renderSwitch(activeExper)}
            {
                <Button
                    className={classes.button}
                    variant='contained'
                    color='primary'
                    onClick={handleNext}
                >
                    {activeExper === 3
                        ? 'Finish'
                        : 'Proceed'}
                </Button>
            }
            {/*</ScrollToTop>*/}

        </div>
    )
}

export default CommercialManipulation;


// this is the same as my commercialManipulation.jsx