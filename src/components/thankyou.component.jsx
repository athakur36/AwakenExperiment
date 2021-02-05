import React from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardContent } from '@material-ui/core';
import * as Colors from '../constants/colors';
import { Link } from 'react-router-dom';

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
  //create dashboard here
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
