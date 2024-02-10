import { NavLink } from 'react-router-dom';
import Auth from '../utils/auth';

export default function Navigation() {
    return (
        <>
            <NavLink id='about' to='/' className='stylized nav-link'>
                Home
            </NavLink>
            <NavLink
                id='work'
                to={Auth.loggedIn() ? '/creator' : '/login'}
                className='stylized nav-link'
            >
                Create
            </NavLink>
        </>
    );
}
