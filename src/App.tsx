import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LoginComponent } from './components/login-component/LoginComponent';
import { HomeComponent } from './components/home-component/HomeComponent';
import { RegisterComponent } from './components/register-component/RegisterComponent';
import { CustomerDashboardComponent } from './components/customer-dashboard-component/CustomerDashboardComponent';
import { VendorDashboardComponent } from './components/vendor-dashboard-component/VendorDashboardComponent';
import { VendorApplyComponent } from './components/vendor-apply-component/VendorApplyComponent';
import { PerformerApplyComponent } from './components/peformer-apply-component/PerformerApplyComponent';
import { PerformerDashboardComponent } from './components/performer-dashboard-component/PerformerDashboardComponent';
import { ContactFormComponent } from './components/contact-form-component/ContactFormComponent';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" component={LoginComponent} />
          <Route path="/register" component={RegisterComponent} />
          <Route path="/inquiry" component={ContactFormComponent} />
          <Route path="/customer" component={CustomerDashboardComponent} />
          <Route path="/vendor" component={VendorDashboardComponent} />
          <Route path="/ven-apply" component={VendorApplyComponent} />
          <Route path="/performer" component={PerformerDashboardComponent} />
          <Route path="/per-apply" component={PerformerApplyComponent} />
          <Route path="/" component={HomeComponent} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
