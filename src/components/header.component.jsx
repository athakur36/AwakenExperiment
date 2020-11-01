import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import * as Colors from '../constants/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& > header': {
      backgroundColor: Colors.PRIMARY,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = ({ userName }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            Awaken Experiment
          </Typography>
          <Button color='inherit'>{userName}</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
