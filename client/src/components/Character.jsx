import { useGLTF, useAnimations } from '@react-three/drei';
import { useRef, useEffect } from 'react';
const classes = [
    'Warrior',
    'Wizard',
    'Pirate',
    'Shark',
    'Skeleton',
    'Panda',
    'Rabbit',
];

export default function Character({
    character = 0,
    animation = 'Idle',
    ...props
}) {
    const { scene, animations } = useGLTF(`/models/${classes[character]}.gltf`);
    const ref = useRef();
    const { actions } = useAnimations(animations, ref);

    useEffect(() => {
        console.log(actions[animation]);
        actions[animation].fadeIn(0.5).play();
    }, []);

    return (
        <group {...props} ref={ref} position={[0, -0.5, 0]}>
            <primitive object={scene} />
        </group>
    );
}
