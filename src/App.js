import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from './actions/index';

import Header from './components/Header';

const Dashboard = () => <h2> Dashboard </h2>
const SurveyNew = () => <h2> Survey </h2>
const LandingPage = () => <h2> Landing </h2>

class App extends Component{

  componentDidMount(){
    this.props.fetchUser();
  }

  render(){
    return (
      <div>
          <BrowserRouter>
              <div className="container">
                  
                  <Header />
                  <Route exact path="/" component={LandingPage}/>
                  <Route exact path="/surveys" component={Dashboard}/>
                  <Route path="/surveys/new" component={SurveyNew}/>
              </div>
          </BrowserRouter>
      </div>
    );
  }
  
}

export default connect(null, {fetchUser})(App);
