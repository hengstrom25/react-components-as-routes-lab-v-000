import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Actors from '../components/Actors';
import Directors from '../components/Directors';
import Movies from '../components/Movies';


const App = (props) => {
  return (
    <Router>
<<<<<<< HEAD
      <div>
        <NavBar />
        <Route path="/" component={Home} />
        <Route exact path="/directors" component={Directors} />
        <Route exact path="/movies" component={Movies} />
        <Route exact path="/actors" component={Actors} />
      </div>
=======
      <Route path="/" component={Home} />
      <Route exact path="/actors" component={Actors} />
      <Route exact path="/directors" component={Directors} />
      <Route exact path="/movies" component={Movies} />
    </React.Fragment>
>>>>>>> 897776fd351588e37234f8c516abc52eceaee3e0
    </Router>
  );
};

export default App
