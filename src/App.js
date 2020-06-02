import React from 'react';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Classes from './components/OurClasses/Classes';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Header />
          <Banner />
        </Route>
        <Route path='/classes'>
          <Header />
          <Classes />
        </Route>
        {/* <Route path='/appointment'>
          <Appointment />
        </Route>
        <Route exact path='/doctor'>
          <Login />
        </Route>
        <Route path='/doctor/dashboard'>
          <Dashboard />
        </Route>
        <Route path='/doctor/patients'>
          <Patients />
        </Route>
        <Route path='/doctor/appointment'>
          <DashBoardAppointments />
        </Route>
        <Route path='/doctor/prescriptions'>
          <Prescriptions />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
