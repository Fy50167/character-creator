import { useGLTF, useAnimations } from '@react-three/drei';
import { useRef, useEffect } from 'react';

export default function Panda({ animation = 'Idle', ...props }) {
    const { scene, animations } = useGLTF(`/models/${props.myClass}.gltf`);
    const ref = useRef();
    const { actions } = useAnimations(animations, ref);

    useEffect(() => {
        actions[animation].reset().fadeIn(0.5).play();
    }, [props.myClass]);

    return (
        <group key={props.myClass} ref={ref} position={[0, -0.75, 0]}>
            <primitive object={scene} scale={0.4} />
        </group>
    );
}
