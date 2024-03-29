import { Fragment, useEffect, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';
import Navigation from './Navigation';
import LOGO from '../assets/images/logo.png';
import { getMe } from '../utils/API';
import Auth from '../utils/auth';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Header() {
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
    }, [userDataLength]);

    return (
        <Disclosure as='nav' className='bg-black w-full'>
            {({ open }) => (
                <>
                    <div className='mx-auto px-2 sm:px-6 lg:px-8'>
                        <div className='relative flex h-16 items-center justify-between'>
                            <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                                <Disclosure.Button className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                                    <span className='absolute -inset-0.5' />
                                    <span className='sr-only'>
                                        Open main menu
                                    </span>
                                    {open ? (
                                        <XMarkIcon
                                            className='block h-6 w-6'
                                            aria-hidden='true'
                                        />
                                    ) : (
                                        <Bars3Icon
                                            className='block h-6 w-6'
                                            aria-hidden='true'
                                        />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start h-full'>
                                <div className='flex flex-shrink-0 items-center h-full'>
                                    <img
                                        className='h-full py-2 w-auto'
                                        src={LOGO}
                                        alt='Site Logo'
                                    />
                                </div>
                                <div className='hidden ml-4 sm:flex items-center'>
                                    <div className='flex space-x-4 mx-auto'>
                                        <Navigation />
                                    </div>
                                </div>
                            </div>
                            <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                                {Auth.loggedIn() ? (
                                    <Menu as='div' className='relative ml-3'>
                                        <div>
                                            <Menu.Button className='relative flex rounded-full bg-gray-800 text-sm'>
                                                <span className='absolute -inset-1.5' />
                                                <span className='sr-only'>
                                                    Open user menu
                                                </span>
                                                <img
                                                    className='h-8 w-8 rounded-full'
                                                    src={
                                                        userData.profilePicture
                                                    }
                                                    alt=''
                                                />
                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            enter='transition ease-out duration-100'
                                            enterFrom='transform opacity-0 scale-95'
                                            enterTo='transform opacity-100 scale-100'
                                            leave='transition ease-in duration-75'
                                            leaveFrom='transform opacity-100 scale-100'
                                            leaveTo='transform opacity-0 scale-95'
                                        >
                                            <Menu.Items className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href='/profile'
                                                            className={classNames(
                                                                active
                                                                    ? 'bg-gray-100'
                                                                    : '',
                                                                'block px-4 py-2 text-sm text-gray-700'
                                                            )}
                                                        >
                                                            Your Profile
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            onClick={
                                                                Auth.logout
                                                            }
                                                            className={classNames(
                                                                active
                                                                    ? 'bg-gray-100'
                                                                    : '',
                                                                'block px-4 py-2 text-sm text-gray-700 hover:cursor-pointer'
                                                            )}
                                                        >
                                                            Sign out
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                ) : (
                                    <NavLink
                                        to='/login'
                                        className='stylized nav-link'
                                    >
                                        Login
                                    </NavLink>
                                )}
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className='sm:hidden'>
                        <div className='space-y-1 px-2 pb-3 pt-2 flex flex-col'>
                            <Navigation />
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}
