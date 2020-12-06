import React from 'react';
import { withRouter } from 'react-router-dom';
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

const Login = ({ history, match }) => {
  const classes = useStyles();
  const [userId, setUserId] = React.useState('');

  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
  };

  const checkUserValidity = () => {
    //TODO: check user authorization in firebase and return true or false
    return true;
  };

  const onLoginClicked = () => {
    const isUserValid = checkUserValidity();
    console.log(history);
    if (isUserValid) {
      //set global user & navigate to Survey Page

            history.push(`/survey/${userId}`);
    } else {
      //display error to the user
    }
  };

  return (
    <>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <div className={classes.loginTitle}>Login to Awaken Experiment</div>
          {/* TODO:Add validations to this text input */}
          <TextField
            fullWidth
            required
            label='User ID'
            margin='normal'
            type='text'
            variant='outlined'
            onChange={handleUserIdChange}
            value={userId}
          />
          <Button
            className={classes.login}
            color='primary'
            size='large'
            type='submit'
            variant='contained'
            onClick={onLoginClicked}
          >
            Log In
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default withRouter(Login);
