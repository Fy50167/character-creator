import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Loader, Environment, ScrollControls } from '@react-three/drei';
import Rig from './Rig';
import Carousel from './Carousel';

export default function CharacterCategories() {
    return (
        <>
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
        </>
    );
}
