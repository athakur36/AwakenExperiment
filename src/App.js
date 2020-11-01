import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';

function App() {
  const [currentUser, setCurrentUser] = React.useState('FirstName LastName');

  return (
    <>
      <Header userName={currentUser} />
      <div>
        <Switch>
          <Route exact path='/' component={HomePage} />
        </Switch>
      </div>
    </>
  );
}

export default App;
