import React from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardContent } from '@material-ui/core';
import * as Colors from '../constants/colors';
import { Link } from 'react-router-dom';
import BarChart from '/Users/ww/Dropbox/AwakenExperimentRepository/AwakenExperiment/src/components/graphvis.component.jsx';



const useStyles = makeStyles({
  card: {
    minWidth: 500,
    minHeight: 350,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContent: {
    minWidth: 500,
    minHeight: 300,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  loginTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    fontSize: '20px',
    fontWeight: '600',
  },
});


const createdashboard = () => {
  //const Survey1 = localStorage.getItem('Part1FreeResponse');
  //const Survey2 = localStorage.getItem('Survey2');
  //const Survey3 = localStorage.getItem('Survey3');
  //const Survey4 = localStorage.getItem('Survey4');
  //const Graph2 = localStorage.getItem('GraphPart1');

  //console.log(Survey2)
  //BarChart.render()
  document.write(BarChart) 
  //return (<BarChart />);
  //console.log(GraphPart1)
  //setState({content: GraphPart1});

  //document.getElementById('GraphPart1').style.display='block';
  //init(GraphPart1);
  //App.render();
  //https://canvasjs.com/forums/topic/rendering-a-chart-with-a-button-click/
  //https://stackoverflow.com/questions/62519770/react-display-chart-when-button-is-clicked
};









const ExperimentEnd = () => {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <div className={classes.loginTitle}>
            Thank you for participating in the study. Please click on dashboard
            to see your digital sensitivity!
          </div>
          {/* TODO:Add validations to this text input */}

          <Link to='/dashboard'>
            <Button
              className={classes.login}
              color='primary'
              type='submit'
              variant='contained'
              onClick={createdashboard}

              
            >
              Go to Dashboard
            </Button>
          </Link>
        </CardContent>
      </Card>
    </>
  );
};

export default withRouter(ExperimentEnd);