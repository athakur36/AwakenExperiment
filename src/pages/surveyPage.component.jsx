import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import Sct from '../components/questionnaire-format/sct.component';
import { IV_Surveys } from '../model/IV-Surveys-Data';
import LikertMultiple from '../components/questionnaire-format/likertMultiple.component';
import LikertMatrix from '../components/questionnaire-format/likertMatrix.component';

const useStyles = makeStyles({
  surveyRoot: {
    width: '100%',
    height: '100%',
    display: 'flex',
    padding: '50px',
  },
});

const SurveyPage = ({ match }) => {
  const classes = useStyles();

  return (
    <div className={classes.surveyRoot}>
      {IV_Surveys.map((ivSurvey, index) => {
        switch (ivSurvey.surveyType) {
          case 'SCT':
            return <Sct questData={ivSurvey.surveyData} />;
          case 'LIKERT_MULTIPLE':
            return <LikertMultiple questData={ivSurvey.surveyData} />;
          case 'LIKERT_MATRIX':
            return <LikertMatrix questData={ivSurvey.surveyData} />;
          default:
            return <div>Survey Type is Invalid</div>;
        }
      })}
    </div>
  );
};

export default withRouter(SurveyPage);
