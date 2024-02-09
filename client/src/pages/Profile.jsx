import PERSON from '../assets/images/stock-image.jpg';
import CharacterDisplay from '../components/CharacterDisplay';
import { getMe } from '../utils/API';
import Auth from '../utils/auth';
import { useEffect, useState } from 'react';

export default function Profile() {
    const [userData, setUserData] = useState({});
    const userDataLength = Object.keys(userData).length;

    useEffect(() => {
        const getUserData = async () => {
            try {
                const token = Auth.loggedIn() ? Auth.getToken() : null;

                if (!token) {
                    return false;
                }

                const response = await getMe(token);

                if (!response.ok) {
                    throw new Error('something went wrong!');
                }

                const user = await response.json();
                setUserData(user);
            } catch (err) {
                console.error(err);
            }
        };

        getUserData();
        console.log(userData);
    }, [userDataLength]);

    return (
        <div className='p-4 md:p-8 flex grow w-full h-full flex-col justify-evenly items-center'>
            <div className='flex flex-col w-full items-center mb-4'>
                <h1 className='text-lg md:text-3xl mb-4'>Your Profile</h1>
                <div className='bg-white w-4/5 h-auto md:h-1/3 p-4 rounded-md flex flex-col md:flex-row'>
                    <div className='w-full md:w-1/2 p-4'>
                        <img
                            src={PERSON}
                            className='m-auto h-auto w-1/2 circle image'
                        />
                    </div>

                    <div className='flex flex-col p-4 w-full md:w-1/2 justify-evenly items-start'>
                        <h2 className='text-black font-bold'>Username</h2>
                        <p className='text-black'>Your name</p>
                        <h2 className='text-black font-bold'>Tagline</h2>
                        <p className='text-black'>This is your tagline!</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col grow w-full items-center'>
                <h2 className='text-lg md:text-2xl mb-4'>Recent creations</h2>
                <div className='bg-white flex flex-col grow h-1/3 rounded-md w-4/5'>
                    <CharacterDisplay
                        creator='Creator'
                        name='Name'
                        race='Race'
                        date='Created On'
                        bold={true}
                    />
                </div>
            </div>
        </div>
    );
}
