import React from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField, Card, CardContent } from '@material-ui/core';
import * as Colors from '../constants/colors';
import firebase from '../firebase/firebase.utils';
//look for library which provides a bar chart component in react
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
  error: {
    color: 'red',
    fontSize: '20px',
    fontWeight: '600',
  },
});

const Login = ({ history, match }) => {
  const classes = useStyles();
  const [userId, setUserId] = React.useState('');
  const [showUserLoginError, setShowUserLoginError] = React.useState(false);
  const [
    showUserDuplicateLoginError,
    setShowDuplicateUserLoginError,
  ] = React.useState(false);

  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
  };

  const checkUserValidity = () => {
    const dbRef = firebase.database().ref('users/' + userId);
    console.log('users/' + userId);

    dbRef.once('value').then(function (snapshot) {
      var doesIDExist = snapshot.exists();
      console.log(doesIDExist);
      if (doesIDExist === true) {
        setShowUserLoginError(false);
        console.log(userId);
        localStorage.setItem('userID', JSON.stringify(userId));
        history.push(`/task`);
      } else {
        setShowUserLoginError(true);
      }
    });
  };

  const onLoginClicked = () => {
    localStorage.clear()
    checkUserValidity();
    // will need to update submit flag at the end of survey to prevent from relogin.
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
          {showUserLoginError && (
            <div className={classes.error}>Invalid User ID</div>
          )}
          {showUserDuplicateLoginError && (
            <div className={classes.error}>
              Already submitted. Please talk to experiment admin.
            </div>
          )}
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
