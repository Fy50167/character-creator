import { useEffect, useState, useRef, Suspense } from 'react';
import { getCharacter } from '../utils/API';
import { useParams } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import Experience from '../components/Experience';
import { Loader } from '@react-three/drei';

export default function Character() {
    const { characterId } = useParams();
    const [characterData, setCharacterData] = useState({});
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [myClass, setMyClass] = useState('');
    const [creator, setCreator] = useState('');
    const [createdDate, setCreatedDate] = useState('');

    useEffect(() => {
        const getCharacterData = async () => {
            try {
                const response = await getCharacter(characterId);

                if (!response.ok) {
                    throw new Error('something went wrong!');
                }

                const character = await response.json();
                setCharacterData(character);
                setName(character.name);
                setDescription(character.description);
                setMyClass(character.class);
                setCreator(character.creator);
                setCreatedDate(character.createdDate);
            } catch (err) {
                console.error(err);
            }
        };

        getCharacterData();
        console.log(characterData);
    }, []);

    return (
        <div className='w-full grow flex justify-center items-center'>
            <div className='bg-white relative flex flex-col my-8 pb-12 md:m-auto w-5/6 character-div h-auto rounded-md'>
                <div className='absolute bottom-0 h-12 text-right creator-top center'>
                    <button>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-8 w-8 save-icon'
                            fill='grey'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4'
                            />
                        </svg>
                    </button>
                </div>
                <div className='w-full h-1/2 flex flex-col md:flex-row'>
                    <div className='w-full md:w-1/2 flex flex-col grow p-4 rounded-md canvas'>
                        <Canvas
                            shadows
                            camera={{
                                position: [0, 0.5, 0],
                                target: [0, 0, 0],
                                fov: 30,
                            }}
                            resize={{ scroll: false }}
                        >
                            <Suspense fallback={null}>
                                <Experience myClass={myClass} />
                            </Suspense>
                        </Canvas>
                        <Loader />
                    </div>
                    <div className='w-full md:w-1/2 flex flex-col justify-evenly items-start p-4'>
                        <div className='creator-top'>
                            <div className='flex items-center'>
                                <h2 className='text-black font-bold relative'>
                                    Name
                                </h2>
                            </div>
                            <p className='text-black'>{name}</p>
                        </div>
                        <div className='creator-bottom'>
                            <h2 className='text-black font-bold'>Class</h2>
                            <p className='text-black'>{myClass}</p>
                        </div>
                    </div>
                </div>
                <div className='w-full grow p-4 pt-0 md:p-8 flex flex-col justify-start'>
                    <div className='flex items-center'>
                        <h2 className='text-black font-bold'>Description</h2>
                    </div>
                    <p className='text-black'>{description}</p>
                </div>
            </div>
        </div>
    );
}
