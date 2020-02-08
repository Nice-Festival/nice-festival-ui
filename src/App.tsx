import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LoginComponent } from './components/login-component/LoginComponent';
import { HomeComponent } from './components/home-component/HomeComponent';
import { RegisterComponent } from './components/register-component/RegisterComponent';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/login" component={LoginComponent} />
        <Route path="/register" component={RegisterComponent} />
        <Route path="/" component={HomeComponent} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
