import { NavLink } from 'react-router-dom';

export default function Navigation() {
    return (
        <>
            <NavLink id='about' to='/' className='stylized nav-link'>
                Home
            </NavLink>
            <NavLink id='work' to='/creator' className='stylized nav-link'>
                Create
            </NavLink>
        </>
    );
}
