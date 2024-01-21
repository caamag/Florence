
import './header.css'; 

import { NavLink } from 'react-router-dom';

function Header () {

    return <div className='header'>

        <h1 className='title'>FLORENCE</h1>

        <ul>
            <li><NavLink to={'/'}>HOME</NavLink></li>
            <li><NavLink to={'/about'}>SOBRE</NavLink></li>
            <li><NavLink to={'/tattoo'}>TATTOO</NavLink></li>
        </ul>

    </div>

}; 

export default Header; 