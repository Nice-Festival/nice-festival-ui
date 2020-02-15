import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LoginComponent } from './components/login-component/LoginComponent';
import { HomeComponent } from './components/home-component/HomeComponent';
import { RegisterComponent } from './components/register-component/RegisterComponent';
import CustomerDashboardComponent from './components/customer-dashboard-component/CustomerDashboardComponent';
import VendorDashboardComponent  from './components/vendor-dashboard-component/VendorDashboardComponent';
import VendorApplyComponent  from './components/vendor-dashboard-component/VendorApplyComponent';
import VendorInboxComponent  from './components/vendor-dashboard-component/VendorInboxComponent';
import VendorApplicationComponent  from './components/vendor-dashboard-component/VendorApplicationComponent';
import PerformerDashboardComponent  from './components/performer-dashboard-component/PerformerDashboardComponent';
import { ContactFormComponent } from './components/contact-form-component/ContactFormComponent';
import ManagerDashboardComponent from './components/manager-dashboard-component/ManagerDashboardComponent';
import ManagerInboxComponent from './components/manager-dashboard-component/ManagerInboxComponent';
import ManagerPerformerListComponent from './components/manager-dashboard-component/ManagerPerformerComponent';
import ManagerVendorComponent from './components/manager-dashboard-component/ManagerVendorComponent';
import { MerchandiseComponent } from './components/merchandise-component/MerchandiseComponent';
import { TicketsComponent } from './components/tickets-component/TicketsComponent';
import CustomerAddComponent from './components/customer-dashboard-component/CustomerAddComponent';
import CustomerPersonalComponent from './components/customer-dashboard-component/CustomerPersonalComponent';
import CustomerInboxComponent from './components/customer-dashboard-component/CustomerInboxComponent';
import PerformerInboxComponent from './components/performer-dashboard-component/PerformerInboxComponent';
import PerformerApplyComponent from './components/performer-dashboard-component/PerformerApplyComponent';
import PerformerApplicationComponent from './components/performer-dashboard-component/PerformerApplicationComponent';
import { LineupComponent } from './components/lineup-component/LineupComponent';
import { NavbarComponent } from './components/navbar-component/NavbarComponent';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" component={LoginComponent} />
          <Route path="/register" component={RegisterComponent} />
          <Route path="/inquiry" component={ContactFormComponent} />
          <Route path="/customer" component={CustomerDashboardComponent} />
          <Route path="/add-to-schedule" component={CustomerAddComponent} />
          <Route path="/personal-schedule" component={CustomerPersonalComponent} />
          <Route path="/cust-inbox" component={CustomerInboxComponent} />
          <Route path="/vendor" component={VendorDashboardComponent} />
          <Route path="/ven-apply" component={VendorApplyComponent} />
          <Route path="/ven-status" component={VendorApplicationComponent} />
          <Route path="/ven-inbox" component={VendorInboxComponent} />
          <Route path="/performer" component={PerformerDashboardComponent} />
          <Route path="/performer" component={PerformerDashboardComponent} />
          <Route path="/per-apply" component={PerformerApplyComponent} />
          <Route path="/per-status" component={PerformerApplicationComponent} />
          <Route path="/per-inbox" component={PerformerInboxComponent} />
          <Route path="/manager" component={ManagerDashboardComponent} />
          <Route path="/man-inbox" component={ManagerInboxComponent} />
          <Route path="/man-performer" component={ManagerPerformerListComponent} />
          <Route path="/man-vendor" component={ManagerVendorComponent} />
          <Route path="/merchandise" component={MerchandiseComponent} />
          <Route path="/tickets" component={TicketsComponent} />
          <Route path="/lineup" component={LineupComponent} />
          <Route path="/" component={HomeComponent} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
