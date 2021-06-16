import React from 'react';
import './Header.css';


function Header ({title, color, subtitle}) {
    return (
        <div className='Header'>
            <h1 style={{ color: `${color}` }}>{title}</h1>
            <h2>{subtitle}</h2>
        </div>
    )
}




/*
class Header extends Component{
    render () {
        return (
            <nav className= 'navigation-bar'>
                <h1>HeaderTest</h1>
                
            </nav>
            
        )
    }
}
*/
export default Header;