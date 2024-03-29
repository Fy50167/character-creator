import { useState, useRef } from 'react';
import { easing } from 'maath';
import { useFrame } from '@react-three/fiber';
import { Image } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';
import * as THREE from 'three';
import '../util';

export default function Card({ url, ...props }) {
    const ref = useRef();
    const navigate = useNavigate();
    const [hovered, hover] = useState(false);
    const pointerOver = (e) => (e.stopPropagation(), hover(true));
    const pointerOut = () => hover(false);
    useFrame((state, delta) => {
        easing.damp3(ref.current.scale, hovered ? 1.15 : 1, 0.1, delta);
        easing.damp(
            ref.current.material,
            'radius',
            hovered ? 0.25 : 0.1,
            0.2,
            delta
        );
        easing.damp(
            ref.current.material,
            'zoom',
            hovered ? 1 : 1.5,
            0.2,
            delta
        );
    });

    const goToHere = (event) => {
        event.stopPropagation();
        navigate(`/categories/${props.className}`);
    };

    return (
        <Image
            ref={ref}
            url={url}
            transparent
            side={THREE.DoubleSide}
            onPointerOver={pointerOver}
            onPointerOut={pointerOut}
            onPointerDown={goToHere}
            {...props}
        >
            <bentPlaneGeometry args={[0.1, 1, 1, 20, 20]} />
        </Image>
    );
}
