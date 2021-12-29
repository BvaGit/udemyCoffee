import { Component } from "react";
import logo from '../../img/Logo.png';
import './menuitems.scss'

class MenuItems extends Component {

    constructor(props) {
        super(props)
    }

    getDataAtr = (e) => {
        const dataRout = e.currentTarget.getAttribute('data-router');
        this.props.routing(dataRout);
    }

    render() {
        return (
            <div className='menu-items'>
                <nav>
                    <ul className='menu-items__nav-items'>
                        <li data-router='main' onClick={this.getDataAtr}><img src={logo} alt='logo' /></li>
                        <li className='p15' data-router='ourCoffee' onClick={this.getDataAtr}>Our coffee</li>
                        <li className='p15' data-router='pleasure' onClick={this.getDataAtr}>For your pleasure</li>
                    </ul>
                </nav>
                
            </div>
        )
    }
}

export default MenuItems