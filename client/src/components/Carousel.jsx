import Card from './Card';

export default function Carousel({ radius = 1.4, count = 7 }) {
    const classes = [
        'Warrior',
        'Wizard',
        'Pirate',
        'Shark',
        'Skeleton',
        'Panda',
        'Rabbit',
    ];

    return Array.from({ length: count }, (_, i) => (
        <Card
            key={i}
            url={`/img${Math.floor(i % 10) + 1}_.jpg`}
            className={classes[i % classes.length]}
            position={[
                Math.sin((i / count) * Math.PI * 2) * radius,
                0,
                Math.cos((i / count) * Math.PI * 2) * radius,
            ]}
            rotation={[0, Math.PI + (i / count) * Math.PI * 2, 0]}
        />
    ));
}
