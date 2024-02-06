import { useState, Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import Experience from '../components/Experience';

export default function Creator() {
    const [name, setName] = useState('');
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

    return (
        <div className='w-full h-full flex justify-center items-center'>
            <div className='bg-white w-5/6 h-auto md:h-4/5 rounded-md'>
                <div className='w-full h-1/2 flex flex-col md:flex-row'>
                    <div className='w-full md:w-1/2 h-full p-4 rounded-md canvas'>
                        <Canvas shadows>
                            <Experience />
                        </Canvas>
                    </div>
                    <div className='w-full md:w-1/2 flex flex-col justify-evenly items-start p-4'>
                        <h2 className='text-black font-bold'>Name</h2>
                        <p className='text-black'>Default Name</p>
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
        </div>
    );
}
