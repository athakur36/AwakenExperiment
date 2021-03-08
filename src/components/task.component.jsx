import React from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardContent } from '@material-ui/core';
import * as Colors from '../constants/colors';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';

//<img src={process.env.PUBLIC_URL + './images/emoticons.png'} width = "350px" height = "75px" />

const useStyles = makeStyles({
  instructions: {
    height: '300px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    fontSize: '24px',
    marginTop: '100px',
  },
});

const Task = ({ history }) => {
  const classes = useStyles();

  const onLoginClicked = () => {
    var userId = localStorage.getItem('userID');
    history.push(`/survey/${userId}`);
  };

  return (
    <>
      <div className={classes.instructions}>
        <div>
          <Box p={2}>
            You will be presented with some videos to watch and interact with
            which we have taken from social media platforms. Please feel free to
            interact with the videos using the icons provided below them.
          </Box>
          <Box textAlign='center'>
            <img
              src={process.env.PUBLIC_URL + './images/taskImage1.png'}
              width='40%'
              height='40%'
            />
          </Box>
        </div>
      </div>
      <Box textAlign='right'>
        <Link to='/survey'>
          <Button variant='contained' color='primary' onClick={onLoginClicked}>
            PROCEED
          </Button>
        </Link>
      </Box>
    </>
  );
};

export default withRouter(Task);
