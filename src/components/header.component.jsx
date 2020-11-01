import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
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
    '& a': {
      color: 'white !important',
    },
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
            <Link to='/'>
              <span>Awaken Experiment</span>
            </Link>
          </Typography>

          <span>{userName ? userName : ''}</span>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
