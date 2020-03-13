import React ,{Component } from 'react'
import SearchPets from '../../images/searchpets.png'
import Pets from '../Pets/Pets';
import {Link, Switch, Route} from 'react-router-dom';

class Home extends Component{
    state ={
        user: ''
    }
    
    setUser(e) {
        e.preventDefault();
        const { user } = e.target['person-name'].value;
        
        
    }

    render(){

        return(
            <div>
            <p>Welcome to Petful where we pride ourselves as being the friendliest pet center in the world</p>
            <p>We have lovable pets for adoption. Search through our database and see which furry friend will touch your heart.</p>
           <p>
               <img src={SearchPets} alt="search for your new pet"/>
           <br/><br/>
           </p>

           <form onSubmit={this.setUser} className="submit-Name">
           
                <input type ="text" name="person-name" placeholder="Enter Your Name Here"/><br/> <br/>
            <Link id='start' type='submit' to='/pets'>Start</Link>
            </form>
            
</div>
        )
    }
}


export default Home