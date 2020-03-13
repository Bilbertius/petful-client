import React, {Component} from 'react'
import Header from '../Header/Header'
import Home from '../Home/Home'
import {Route } from 'react-router-dom'
import PetContext from '../../Context/PetContext';

class  App extends Component {
static contextType = PetContext;
 render(){
    const { dog, cat} = this.context;
  return( 
    <div className="App">
      <Header/>
      <Route
         path='/'
         component={Home}
      />
<h3>{dog.name} and {cat.name}</h3>

</div>)
 }
 
}

export default App
