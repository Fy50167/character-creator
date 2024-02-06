import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
export default function Creator() {
    const [name, setName] = useState('');

    return (
        <div className='w-full h-full flex justify-center items-center'>
            <div className='bg-white w-5/6 h-auto md:h-4/5 rounded-md'>
                <div className='w-full flex'>
                    <div className='w-1/2 p-4'>
                        <Canvas />
                    </div>
                    <div className='w-1/2 flex flex-col justify-evenly items-start p-4'>
                        <h2 className='text-black font-bold'>Username</h2>
                        <p className='text-black'>Your name</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
