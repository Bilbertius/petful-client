import React, {Component} from 'react'
import Header from '../Header/Header'
import Home from '../Home/Home'
import Pets from '../Pets/Pets'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'


class  App extends Component {
 render(){
  return(

       <div className="App">
           <Router>
         <Header/>
        <Home />
          
          <Switch>
              <Route path='/'>
                <Home />
              </Route>
              <Route path="/pets">
                  <Pets />
              </Route>
           

        </Switch>
           </Router>
       </div>
    
       )
 }
 
}

export default App
