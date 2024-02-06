import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Environment, PerspectiveCamera } from '@react-three/drei';
import Wizard from './Wizard';
import Warrior from './Warrior';
import Pirate from './Pirate';
import Skeleton from './Skeleton';
import Shark from './Shark';
import Rabbit from './Rabbit';
import Panda from './Panda';

export default function Experience(props) {
    const myClass = props.myClass;
    let character;

    switch (props.myClass) {
        case 'Wizard':
            character = <Wizard myClass={myClass} />;
            break;
        case 'Warrior':
            character = <Warrior myClass={myClass} />;
            break;
        case 'Pirate':
            character = <Pirate myClass={myClass} />;
            break;
        case 'Skeleton':
            character = <Skeleton myClass={myClass} />;
            break;
        case 'Rabbit':
            character = <Rabbit myClass={myClass} />;
            break;
        case 'Panda':
            character = <Panda myClass={myClass} />;
            break;
        case 'Shark':
            character = <Shark myClass={myClass} />;
            break;
    }

    useFrame(({ clock, camera }) => {
        const rotationSpeed = 0.5;

        const x = Math.sin(clock.getElapsedTime() * rotationSpeed) * 5;
        const z = Math.cos(clock.getElapsedTime() * rotationSpeed) * 5;

        camera.position.set(x, 0, z);
        camera.lookAt(0, 0, 0);
    });

    return (
        <>
            <Environment preset='dawn' background blur={2} />
            {character}
        </>
    );
}
