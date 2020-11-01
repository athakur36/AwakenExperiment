import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles({});

const SurveyPage = ({ match }) => {
  const classes = useStyles();

  return (
    <div>
      This is the survey page{match.params.id ? ` for ${match.params.id}` : ''}
    </div>
  );
};

export default withRouter(SurveyPage);
