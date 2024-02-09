import { useState, Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import Experience from '../components/Experience';
import { Loader } from '@react-three/drei';
import { createCharacter } from '../utils/API';

export default function Creator() {
    const nameRef = useRef(null);
    const descriptionRef = useRef(null);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [myClass, setMyClass] = useState('Warrior');
    const classes = [
        'Warrior',
        'Wizard',
        'Pirate',
        'Shark',
        'Skeleton',
        'Panda',
        'Rabbit',
    ];

    const handleNameChange = (input) => {
        setName(input);
    };

    const handleDescriptionChange = (input) => {
        setDescription(input);
    };

    const focusInput = (input) => {
        input.current.focus();
    };

    const submitCharacter = () => {
        console.log(name, description, myClass);
    };

    return (
        <div className='w-full grow flex justify-center items-center'>
            <div className='bg-white relative flex flex-col my-8 pb-12 md:m-auto w-5/6 character-div h-auto rounded-md'>
                <div className='absolute bottom-0 h-12 text-right creator-top center'>
                    <button>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-8 w-8 save-icon'
                            fill='grey'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                            strokeWidth={2}
                            onClick={submitCharacter}
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4'
                            />
                        </svg>
                    </button>
                </div>
                <div className='w-full h-1/2 flex flex-col md:flex-row'>
                    <div className='w-full md:w-1/2 flex flex-col grow p-4 rounded-md canvas'>
                        <Canvas
                            shadows
                            camera={{
                                position: [0, 0.5, 0],
                                target: [0, 0, 0],
                                fov: 30,
                            }}
                            resize={{ scroll: false }}
                        >
                            <Suspense fallback={null}>
                                <Experience myClass={myClass} />
                            </Suspense>
                        </Canvas>
                        <Loader />
                    </div>
                    <div className='w-full md:w-1/2 flex flex-col justify-evenly items-start p-4'>
                        <div className='creator-top'>
                            <div className='flex items-center'>
                                <h2 className='text-black font-bold relative'>
                                    Name
                                </h2>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 24 24'
                                    fill='black'
                                    className='w-4 h-4 ml-2 hover:cursor-pointer'
                                    onClick={() => focusInput(nameRef)}
                                >
                                    <path d='M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z' />
                                    <path d='M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z' />
                                </svg>
                            </div>
                            <input
                                onChange={(e) =>
                                    handleNameChange(e.target.value)
                                }
                                maxLength={35}
                                className='text-black w-full'
                                id='name'
                                name='name'
                                type='text'
                                value={name}
                                ref={nameRef}
                                placeholder='Come up with a cool name!'
                            />
                        </div>
                        <div className='creator-bottom'>
                            <h2 className='text-black font-bold'>Class</h2>
                            <div className='flex flex-wrap'>
                                {classes.map((button) => (
                                    <input
                                        type='button'
                                        className={`btn ${
                                            myClass == button ? 'active' : ''
                                        }`}
                                        id={button}
                                        key={button}
                                        value={button}
                                        onClick={() => setMyClass(button)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full grow p-4 pt-0 md:p-8 flex flex-col justify-start'>
                    <div className='flex items-center'>
                        <h2 className='text-black font-bold'>Description</h2>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            fill='black'
                            className='w-4 h-4 ml-2 hover:cursor-pointer'
                            onClick={() => focusInput(descriptionRef)}
                        >
                            <path d='M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z' />
                            <path d='M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z' />
                        </svg>
                    </div>
                    <textarea
                        onChange={(e) =>
                            handleDescriptionChange(e.target.value)
                        }
                        maxLength={2000}
                        className='text-black w-full flex flex-col items-start justify-center grow input-placeholder'
                        id='description'
                        name='description'
                        type='text'
                        value={description}
                        ref={descriptionRef}
                        placeholder='Come up with a cool description!'
                    />
                </div>
            </div>
        </div>
    );
}
