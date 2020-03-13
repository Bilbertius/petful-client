import React ,{Component } from 'react'

import {Link} from 'react-router-dom'

class Header extends Component{
    render(){

        return(
           <header> <Link to= "/"><h1>Petful - An Adoption Agency</h1></Link></header>
        )
    }
}


export default Header