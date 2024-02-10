import CharacterDisplay from '../components/CharacterDisplay';
import { getMe, updateUser } from '../utils/API';
import Auth from '../utils/auth';
import { useEffect, useState, useRef } from 'react';

const profilePictures = [
    '/img1_.jpg',
    '/img2_.jpg',
    '/img3_.jpg',
    '/img4_.jpg',
    '/img5_.jpg',
    '/img6_.jpg',
    '/img7_.jpg',
    '/stock-image.jpg',
];

export default function Profile() {
    const usernameRef = useRef(null);
    const taglineRef = useRef(null);
    const [userData, setUserData] = useState({});
    const userDataLength = Object.keys(userData).length;
    const [username, setUsername] = useState('');
    const [tagline, setTagline] = useState('');
    const [profilePicture, setProfilePicture] = useState('/stock-image.jpg');
    const [popup, setPopup] = useState(false);
    const initialRender = useRef(true);

    const handleUsernameChange = (input) => {
        setUsername(input);
    };

    const handleTaglineChange = (input) => {
        setTagline(input);
    };

    const focusInput = (input) => {
        input.current.focus();
    };

    const showPopup = () => {
        setPopup(!popup);
    };

    const changeProfile = (picture) => {
        setProfilePicture(picture);
    };

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
                setUsername(user.username);
                setTagline(user.tagline);
                setProfilePicture(user.profilePicture);
            } catch (err) {
                console.error(err);
            }
        };

        getUserData();
    }, [userDataLength]);

    useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false;
            return;
        }
        const updateUserData = async () => {
            try {
                const response = await updateUser({
                    username: username,
                    tagline: tagline,
                    profilePicture: profilePicture,
                    userId: userData._id,
                });

                if (!response.ok) {
                    throw new Error('something went wrong!');
                }

                const user = await response.json();
            } catch (err) {
                console.error(err);
            }
        };

        updateUserData();
        console.log(profilePicture);
    }, [username, tagline, profilePicture, userData]);

    return (
        <div className='p-4 md:p-8 flex grow w-full h-full flex-col justify-evenly items-center'>
            <div className='flex flex-col w-full items-center mb-4'>
                <h1 className='text-lg md:text-3xl mb-4'>Your Profile</h1>
                <div className='bg-white w-4/5 h-auto md:h-1/3 p-4 rounded-md flex flex-col md:flex-row'>
                    <div className='w-full md:w-1/2 p-4'>
                        <img
                            src={profilePicture}
                            className='m-auto circle image hover:cursor-pointer'
                            onClick={() => showPopup()}
                        />
                    </div>

                    <div className='flex flex-col p-4 w-full md:w-1/2 justify-evenly items-start'>
                        <div className='flex items-center'>
                            <h2 className='text-black font-bold'>Username</h2>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 24 24'
                                fill='black'
                                className='w-4 h-4 ml-2 hover:cursor-pointer'
                                onClick={() => focusInput(usernameRef)}
                            >
                                <path d='M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z' />
                                <path d='M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z' />
                            </svg>
                        </div>
                        <input
                            onChange={(e) =>
                                handleUsernameChange(e.target.value)
                            }
                            maxLength={35}
                            className='text-black w-full'
                            id='username'
                            name='username'
                            type='text'
                            value={username}
                            ref={usernameRef}
                        />
                        <div className='flex items-center'>
                            <h2 className='text-black font-bold'>Tagline</h2>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 24 24'
                                fill='black'
                                className='w-4 h-4 ml-2 hover:cursor-pointer'
                                onClick={() => focusInput(taglineRef)}
                            >
                                <path d='M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z' />
                                <path d='M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z' />
                            </svg>
                        </div>
                        <input
                            onChange={(e) =>
                                handleTaglineChange(e.target.value)
                            }
                            maxLength={35}
                            className='text-black w-full'
                            id='tagline'
                            name='tagline'
                            type='text'
                            value={tagline}
                            ref={taglineRef}
                        />
                    </div>
                </div>
            </div>
            <div className='flex flex-col grow w-full items-center'>
                <h2 className='text-lg md:text-2xl mb-4'>Recent creations</h2>
                <div className='bg-white flex flex-col justify-baseline h-auto rounded-md w-4/5'>
                    <CharacterDisplay
                        creator='Creator'
                        name='Name'
                        race='Class'
                        date='Created On'
                        top={true}
                    />
                    {userData.characters &&
                        userData.characters
                            .slice(-5)
                            .map((character) => (
                                <CharacterDisplay
                                    key={character._id}
                                    name={character.name}
                                    class={character.class}
                                    date={character.createdDate}
                                    race={character.class}
                                    creator={character.creator}
                                    id={character._id}
                                    top={false}
                                />
                            ))}
                </div>
            </div>
            {popup && (
                <div className='popup' onClick={showPopup}>
                    <div className='popup-content justify-center md:justify-start'>
                        {profilePictures.map((picture) => (
                            <img
                                src={picture}
                                key={picture}
                                onClick={() => changeProfile(picture)}
                                className='profile-picture'
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
