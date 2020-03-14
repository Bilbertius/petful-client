import React ,{Component } from 'react'
import PetContext from '../../Context/PetContext';
import Pet from '../Pet/Pet.js';


class Pets extends Component{
    static contextType = PetContext;
    
    render(){
        const {cat, dog, adoptCat, adoptDog} = this.context;
        return(
            <section className='Pets'>
            <h2>Our Available Pet Friends</h2>
                
                <h3>Please choose a dog or cat</h3>
                <Pet
                    info={cat}
                    handleClick={() => adoptCat}
                />
                <Pet
                    info={dog}
                    handleClick={() => adoptDog}
                />
            </section>
        )
    }
}


export default Pets