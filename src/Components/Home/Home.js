import React ,{Component } from 'react'
import SearchPets from '../../images/searchpets.png'


class Home extends Component{
    render(){

        return(
            <div>
            <p>Welcome to Petful where we pride ourselves as being the friendliest pet center in the world</p>
            <p>We have lovable pets for adoption. Search through our database and see which furry friend will touch your heart</p>
           <p>
               <img src={SearchPets} alt="search for your new pet"/>
           <br/><br/>

           <form>
            
                <input type ="text" placeholder="Enter Your Name Here"/><br/> <br/>
            <input type="button" value="Start Search"/>
            </form>
            </p>
</div>
        )
    }
}


export default Home