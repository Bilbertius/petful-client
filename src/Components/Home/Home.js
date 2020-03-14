import React ,{Component } from 'react'
import SearchPets from '../../images/searchpets.png'

import {Link} from 'react-router-dom';
import PersonContext from '../../Context/PersonContext';

class Home extends Component{
    static contextType = PersonContext;
    state ={
        user: this.context.person
    }
    
    setUser(e) {
        e.preventDefault();
        const  user  = e.target['person-name'].value;
        this.setState({user : user})
    }

    render(){

        return(
            <div>
                <p>Welcome to Petful where we pride ourselves as being the friendliest pet center in the world</p>
                <p>We have lovable pets for adoption. Search through our database and see which furry friend will touch your heart.</p>
                <span>
                    <img src={SearchPets} alt="search for your new pet"/>
                </span>
                <form onSubmit={this.setUser} className="submit-Name">
                <input type ="text" name="person-name" placeholder="Enter Your Name Here"/>
                <Link id='start' type='submit' to='/pets'>Start</Link>
            </form>
            
            </div>
        )
    }
}


export default Home