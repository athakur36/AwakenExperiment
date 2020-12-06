import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Header from './components/header.component';
import HomePage from './pages/homePage.component';
import SurveyPage from './pages/surveyPage.component';
import ExperimentsPage from './pages/experimentsPage.component';

const useStyles = makeStyles({
  appBody: {
    height: 'calc(100vh - 64px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eeeeee',
    overflowY: 'auto',
  },
});

function App() {
  const classes = useStyles();
  const [currentUser, setCurrentUser] = React.useState('USER ID');

  return (
    <>
      <Header userName={currentUser} />
      <div className={classes.appBody}>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/survey' component={SurveyPage} />
          <Route path='/survey/:id' component={SurveyPage} />
          <Route exact path='/experiments' component={ExperimentsPage} />
        </Switch>
      </div>
    </>
  );
}

export default App;
