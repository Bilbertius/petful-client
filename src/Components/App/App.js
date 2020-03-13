import React, {Component} from 'react'
import Header from '../Header/Header'
import Home from '../Home/Home'
import {Route } from 'react-router-dom'


class  App extends Component {
 render(){
  return( 
  <div className="App">
  <Header/>
  <Route
  path='/'
  component={Home}
  />


</div>)
 }
 
}

export default App
