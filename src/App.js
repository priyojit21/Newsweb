import './App.css';
// react class based component(type rcc)
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          {/* accesing the variable of class that is d by this.d */}
          {/* hello my 1st class based component {this.d} */}
          <Navbar />
          <Routes>
            {/* to navigate to differnt sections we have to add that key wfich is unique */}
            <Route exact path='/' element={<News key='general' category='general' />}> </Route>
            <Route exact path='/Business' element={<News key='Business' category='Business' />}> </Route>
            <Route exact path='/Entertainment' element={<News key='Entertainment' category='Entertainment' />}> </Route>
            <Route exact path='/Sports' element={<News key='Sports' category='Sports' />}> </Route>
            <Route exact path='/General'element={<News key='General' category='General' />}> </Route>
            <Route exact path='/Health' element={<News key ='Health' category='Health' />}> </Route>
            <Route exact path='/Technology' element={<News key='Technology' category='Technology' />}> </Route>
            <Route exact path='/Science' element={<News key='Science' category='Science' />}> </Route>
          </Routes>
        </Router>
      </div>
    )
  }
}

