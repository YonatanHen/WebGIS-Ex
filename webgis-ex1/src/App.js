import React, {Component} from 'react';
import PageWrapper from './Components/PageWrapper';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './Components/Pages/Home';

class App extends Component {
  render(){
    return(
      <>
      <Router>
        <PageWrapper>
          <Route
            path="/"
            component={Home}
          >
          </Route>
        </PageWrapper>
      </Router>
      </>
    );
  }
}

export default App;
