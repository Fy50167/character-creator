import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Loader, Environment, ScrollControls } from '@react-three/drei';
import Rig from '../components/Rig';
import Carousel from '../components/Carousel';

export default function Home() {
    return (
        <section className='w-full h-full flex grow py-8 flex-col justify-center items-center home'>
            <div className='text-center'>
                <h1 className='stylized text-xl md:text-4xl'>
                    Welcome to the Character Creator!
                </h1>
            </div>

            <div className='flex grow flex-col justify-center items-center w-4/5 mt-10'>
                <h3 className='text-lg md:text-xl'>
                    Scroll to view what people have made so far!
                </h3>
                <div className='bg-white grow rounded-md w-full mt-4 flex flex-col home-canvas'>
                    <Canvas shadows camera={{ position: [0, 0, 100], fov: 15 }}>
                        <fog attach='fog' args={['#a79', 8.5, 12]} />
                        <Suspense fallback={null}>
                            <ScrollControls pages={4} infinite>
                                <Rig rotation={[0, 0, 0.15]}>
                                    <Carousel />
                                </Rig>
                            </ScrollControls>
                        </Suspense>
                        <Environment preset='dawn' background blur={0.5} />
                    </Canvas>
                    <Loader />
                </div>
            </div>
        </section>
    );
}
