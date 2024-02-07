import CharacterDisplay from '../components/CharacterDisplay';
import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Loader, Environment } from '@react-three/drei';

export default function Home() {
    return (
        <section className='w-full grow flex py-8 flex-col justify-center items-center'>
            <div className='text-center'>
                <h1 className='stylized text-xl md:text-4xl'>
                    Welcome to the Character Creator!
                </h1>
            </div>

            <div className='flex grow flex-col justify-center items-center w-4/5 mt-10'>
                <h3 className='text-lg md:text-xl'>
                    Here's what people have made...
                </h3>
                <div className='bg-white rounded-md w-full mt-4 grow'>
                    <Canvas shadows camera={{ position: [0, 0, 100], fov: 15 }}>
                        <fog attach='fog' args={['#a79', 8.5, 12]} />
                        <Suspense fallback={null}></Suspense>
                        <Environment preset='dawn' background blur={0.5} />
                    </Canvas>
                    <Loader />
                </div>
            </div>
        </section>
    );
}
