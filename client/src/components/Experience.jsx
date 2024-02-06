import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Environment, PerspectiveCamera } from '@react-three/drei';
import Character from './Character';

export default function Experience() {
    const cameraRef = useRef();

    useFrame((state, delta) => {
        const radius = 5;
        const theta = Math.PI / 500;
        const x = radius * Math.sin(theta);
        const z = radius * Math.cos(theta);

        state.camera.position.set(x, 0, z);
    });

    return (
        <>
            <Environment preset='dawn' background blur={2} />
            <Character />
        </>
    );
}
