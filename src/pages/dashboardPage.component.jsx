//This code greatly simplified from an original and more complex dashboardPage.coponent.jsx that Arti helped me to create.
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExperimentEnd from '../components/thankyou.component';
//Imports the BarChart from graphvis.component.jsx
import BarChart from '../components/graphvis.component.jsx';

const useStyles = makeStyles({});

const Dash = () => {
  const classes = useStyles();
  var didReload = 0

  function refreshPage() {
    if (didReload == 0) {
      window.location.reload()
      didReload = 1
    }

  }

  //Calls the BarChart to be displayed
  return (
    <div>
      <BarChart />
      <button onClick={refreshPage}>Click to show results!</button>
    </div>
  );
};

export default Dash;
