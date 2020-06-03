import React from 'react';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Workout from './components/HomePage/Workout';
import Classes from './components/OurClasses/Classes';
import ClassesDetail from './components/OurClasses/ClassesDetail';
import NotFound from './components/NotFound/NotFound';
import Pricing from './components/Pricing/Pricing';
import Membership from './components/Membership/Membership';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Header />
          <Banner />
          <Workout />
        </Route>
        <Route path='/classes'>
          <Header />
          <Classes />
        </Route>
        <Route path='/class/:key'>
          <Header />
          <ClassesDetail />
        </Route>
        <Route path='/pricing'>
          <Header />
          <Pricing />
        </Route>
        <Route path='/price/:key'>
          <Header />
          <Membership />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
