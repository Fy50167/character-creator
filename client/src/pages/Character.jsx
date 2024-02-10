import { useEffect, useState, Suspense } from 'react';
import { getCharacter, deleteCharacter } from '../utils/API';
import { useParams } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import Experience from '../components/Experience';
import { Loader } from '@react-three/drei';
import Auth from '../utils/auth';
import Swal from 'sweetalert2';
import { jwtDecode } from 'jwt-decode';

export default function Character() {
    const { characterId } = useParams();
    const [characterData, setCharacterData] = useState({});
    const [createdDate, setCreatedDate] = useState('');
    let formattedDate = createdDate;
    const token = jwtDecode(Auth.getToken());

    const handleDeleteCharacter = async () => {
        try {
            const token = jwtDecode(Auth.getToken());
            const response = await deleteCharacter(characterId, token.data._id);
            Swal.fire({
                title: `Success!`,
                text: `You've successfully deleted your character.`,
                icon: 'success',
                confirmButtonText: 'Confirm',
            }).then(() => {
                window.location.href = '/';
            });
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        const getCharacterData = async () => {
            try {
                const response = await getCharacter(characterId);

                if (!response.ok) {
                    throw new Error('something went wrong!');
                }

                const character = await response.json();
                setCharacterData(character);
                setCreatedDate(character.createdDate);
            } catch (err) {
                console.error(err);
            }
        };

        getCharacterData();
    }, []);

    formattedDate = new Date(createdDate).toLocaleDateString('en-US');
    console.log(characterData);

    return (
        <div className='w-full grow flex justify-center items-center'>
            <div className='bg-white relative flex flex-col my-8 pb-12 md:m-auto w-5/6 character-div h-auto rounded-md'>
                <div className='absolute bottom-0 h-12 text-right creator-top center flex items-center justify-end'>
                    {characterData.creator === token.data.username && (
                        <button>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth={1.5}
                                stroke='black'
                                className='h-6 w-6 save-icon'
                                onClick={handleDeleteCharacter}
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0'
                                />
                            </svg>
                        </button>
                    )}
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
                                <Experience myClass={characterData.myClass} />
                            </Suspense>
                        </Canvas>
                        <Loader />
                    </div>
                    <div className='w-full md:w-1/2 flex flex-col justify-evenly items-start p-4'>
                        <div className='creator-top flex'>
                            <div className='flex flex-col w-full md:w-1/2'>
                                <h2 className='text-black font-bold relative'>
                                    Name
                                </h2>
                                <p className='text-black'>
                                    {characterData.name}
                                </p>
                            </div>
                            <div className='flex flex-col w-full md:w-1/2'>
                                <h2 className='text-black font-bold relative'>
                                    Creator
                                </h2>
                                <p className='text-black'>
                                    {characterData.creator}
                                </p>
                            </div>
                        </div>
                        <div className='creator-bottom flex'>
                            <div className='flex flex-col w-full md:w-1/2'>
                                <h2 className='text-black font-bold relative'>
                                    Class
                                </h2>
                                <p className='text-black'>
                                    {characterData.myClass}
                                </p>
                            </div>
                            <div className='flex flex-col w-full md:w-1/2'>
                                <h2 className='text-black font-bold relative'>
                                    Created On
                                </h2>
                                <p className='text-black'>{formattedDate}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full grow p-4 pt-0 md:p-8 flex flex-col justify-start'>
                    <div className='flex items-center'>
                        <h2 className='text-black font-bold'>Description</h2>
                    </div>
                    <p className='text-black'>{characterData.description}</p>
                </div>
            </div>
        </div>
    );
}
