import { NavLink } from 'react-router-dom';

export default function Navigation() {
    return (
        <>
            <NavLink id='about' to='/' className='gold nav-link'>
                About
            </NavLink>
            <NavLink id='work' to='/projects' className='gold nav-link'>
                Work
            </NavLink>
            <NavLink id='resume' to='/resume' className='gold nav-link'>
                Resumé
            </NavLink>
            <NavLink id='contact' to='/contact' className='gold nav-link'>
                Contact
            </NavLink>
        </>
    );
}
