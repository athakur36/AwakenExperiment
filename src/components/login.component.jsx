import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField, Card, CardContent } from '@material-ui/core';
import * as Colors from '../constants/colors';

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
    color: Colors.PRIMARY,
  },
  login: {
    width: '100%',
  },
});

const Login = () => {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <div className={classes.loginTitle}>Login to Awaken Experiment</div>
          <TextField
            fullWidth
            label='User ID'
            margin='normal'
            type='text'
            variant='outlined'
          />
          <Button
            className={classes.login}
            color='primary'
            size='large'
            type='submit'
            variant='contained'
          >
            Log In
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default Login;
