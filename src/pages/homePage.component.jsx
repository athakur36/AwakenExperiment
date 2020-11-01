import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Login from '../components/login.component';

const useStyles = makeStyles({});

const HomePage = () => {
  const classes = useStyles();

  return (
    <div>
      <Login />
    </div>
  );
};

export default HomePage;
