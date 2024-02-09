import { useState } from 'react';
import { createUser } from '../utils/API';
import Auth from '../utils/auth';

export default function Signup() {
    const [userFormData, setUserFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            const response = await createUser(userFormData);

            if (!response.ok) {
                throw new Error('something went wrong!');
            }

            const { token, user } = await response.json();
            console.log(user);
            Auth.login(token);
        } catch (err) {
            console.error(err);
            setShowAlert(true);
        }

        setUserFormData({
            username: '',
            email: '',
            password: '',
        });
    };

    return (
        <div className='w-full h-full flex grow flex-col justify-center items-center'>
            <form
                onSubmit={handleFormSubmit}
                className='w-4/5 border bg-white shadow-lg rounded p-6'
            >
                <div className='mb-4'>
                    <label
                        className='block stylized text-gray-700 text-sm font-bold mb-2'
                        htmlFor='username'
                    >
                        Username
                    </label>
                    <input
                        onChange={handleInputChange}
                        className='bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        id='username'
                        name='username'
                        type='text'
                        defaultValue={userFormData.username}
                        placeholder='username'
                    />
                </div>
                <div className='mb-4'>
                    <label
                        className='block stylized text-gray-700 text-sm font-bold mb-2'
                        htmlFor='email'
                    >
                        Email
                    </label>
                    <input
                        onChange={handleInputChange}
                        className='bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        id='email'
                        name='email'
                        type='text'
                        defaultValue={userFormData.email}
                        placeholder='email'
                    />
                </div>
                <div className='mb-4'>
                    <label
                        className='block stylized text-gray-700 text-sm font-bold mb-2'
                        htmlFor='password'
                    >
                        Password
                    </label>
                    <input
                        onChange={handleInputChange}
                        className='bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        id='password'
                        name='password'
                        type='text'
                        defaultValue={userFormData.password}
                        placeholder='password'
                    />
                </div>

                <div className='flex items-center justify-between'>
                    <button
                        className='bg-blue-500 stylized hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                        type='submit'
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
