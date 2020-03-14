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
 <Home />
  <Switch>
  
<Route
path="/pets"
component={Pets}
/>


</Switch>

</div>)
 }
 
}

export default App
