import React, {Component} from 'react'
import Header from '../Header/Header'
import Home from '../Home/Home'
import Pets from '../Pets/Pets'
import {Route,Switch } from 'react-router-dom'


class  App extends Component {
 render(){
  return( 
  <div className="App">
  <Header/>

  <Switch>
  
<Route
path="/pets"
component={Pets}
/>

<Route
  exact path='/'
  component={Home}
  />
</Switch>

</div>)
 }
 
}

export default App
