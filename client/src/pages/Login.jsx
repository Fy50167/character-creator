import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {
        } catch (e) {
            console.error(e);
        }

        setFormState({
            email: '',
            password: '',
        });
    };

    return (
        <div className='w-full h-full flex flex-col justify-center items-center'>
            <form
                onSubmit={handleFormSubmit}
                className='w-4/5 border bg-white shadow-lg rounded p-6'
            >
                <div className='mb-4'>
                    <label
                        className='block stylized text-gray-700 text-sm font-bold mb-2'
                        htmlFor='email-address'
                    >
                        Email Address
                    </label>
                    <input
                        onChange={handleChange}
                        className='bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        id='email-address'
                        name='email'
                        type='text'
                        defaultValue={formState.email}
                        placeholder='example@gmail.com'
                    />
                </div>
                <div className='mb-6'>
                    <label
                        className='block stylized text-gray-700 text-sm font-bold mb-2'
                        htmlFor='password'
                    >
                        Password
                    </label>
                    <input
                        onChange={handleChange}
                        className='bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                        id='password'
                        name='password'
                        type='password'
                        defaultValue={formState.password}
                        placeholder='******'
                    />
                </div>
                <div className='flex items-center justify-between'>
                    <button
                        className='bg-blue-500 stylized hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                        type='submit'
                    >
                        Sign In
                    </button>
                    <Link
                        to='/signup'
                        className='inline-block stylized align-baseline font-bold text-sm text-blue-500 hover:text-blue-800'
                    >
                        Sign Up
                    </Link>
                </div>
            </form>
            <p className='text-center text-black text-xs mt-4'>
                2024 Character Creator
            </p>
        </div>
    );
};

export default Login;
