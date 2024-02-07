import { useRef } from 'react';
import { useScroll } from '@react-three/drei';
import { easing } from 'maath';
import { useFrame } from '@react-three/fiber';

export default function Rig(props) {
    const ref = useRef();
    const scroll = useScroll();
    useFrame((state, delta) => {
        ref.current.rotation.y = -scroll.offset * (Math.PI * 2);
        state.events.update(); //
        easing.damp3(
            state.camera.position,
            [-state.pointer.x * 2, state.pointer.y + 1.5, 10],
            0.3,
            delta
        );
        state.camera.lookAt(0, 0, 0);
    });
    return <group ref={ref} {...props} />;
}
