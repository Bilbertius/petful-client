import React ,{Component } from 'react'
import SearchPets from '../../images/searchpets.png'


class Home extends Component{
startSearch= event=>{
    event.preventDefault()


    console.log("button is working")
    this.props.history.push('/pets')
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

           <form onSubmit={this.startSearch} className="submit-Name"> 
           
                <input type ="text" name="person-name" placeholder="Enter Your Name Here"/><br/> <br/>
            <input type="submit" value="Start Search"/>
            </form>
            
</div>
        )
    }
}


export default Home