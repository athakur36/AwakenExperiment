import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExperimentEnd from '../components/thankyou.component';
import BarChart from '../components/graphvis.component.jsx';

const useStyles = makeStyles({});

const Dash = () => {
  const classes = useStyles();

  return (
    <div>
      <BarChart />
    </div>
  );
};

export default Dash;
