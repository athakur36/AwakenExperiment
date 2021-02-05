import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExperimentEnd from '../components/thankyou.component';

const useStyles = makeStyles({});

const HomePage = () => {
  const classes = useStyles();

  return (
    <div>
      <ExperimentEnd />
    </div>
  );
};

export default HomePage;
