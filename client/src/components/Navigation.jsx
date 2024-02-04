import { NavLink } from 'react-router-dom';

export default function Navigation() {
    return (
        <>
            <NavLink id='about' to='/' className='gold nav-link'>
                Home
            </NavLink>
            <NavLink id='work' to='/creator' className='gold nav-link'>
                Create
            </NavLink>
        </>
    );
}
