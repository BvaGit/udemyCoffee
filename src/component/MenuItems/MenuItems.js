import { Component } from "react";
import logo from '../../img/Logo.png';
import './menuitems.scss'

class MenuItems extends Component {

    render() {
        return (
            <div className='menu-items'>
                <nav>
                    <ul className='menu-items__nav-items'>
                        <li><img src={logo} alt='logo' /></li>
                        <li className='p15'>Our coffee</li>
                        <li className='p15'>For your pleasure</li>
                    </ul>
                </nav>
                
            </div>
        )
    }
}

export default MenuItems