import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Experience from '../components/Experience';
import { Loader } from '@react-three/drei';

export default function Creator() {
    const [name, setName] = useState('');
    const [myClass, setMyClass] = useState('Warrior');
    const classes = [
        'Warrior',
        'Wizard',
        'Pirate',
        'Shark',
        'Skeleton',
        'Panda',
        'Rabbit',
    ];

    return (
        <div className='w-full grow flex justify-center items-center'>
            <div className='bg-white relative my-8 pb-12 md:m-auto w-5/6 character-div h-auto rounded-md'>
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
                            <h2 className='text-black font-bold'>Name</h2>
                            <p className='text-black'>Default Name</p>
                        </div>
                        <div className='creator-bottom'>
                            <h2 className='text-black font-bold'>Class</h2>
                            <div className='flex flex-wrap'>
                                {classes.map((button) => (
                                    <input
                                        type='button'
                                        className={`btn ${
                                            myClass == button ? 'active' : ''
                                        }`}
                                        id={button}
                                        key={button}
                                        value={button}
                                        onClick={() => setMyClass(button)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full h-1/2 p-4 md:p-8 flex flex-col justify-start'>
                    <h2 className='text-black font-bold'>Description</h2>
                    <p className='text-black'>
                        "Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut
                        odit aut fugit, sed quia consequuntur magni dolores eos
                        qui ratione voluptatem sequi nesciunt. Neque porro
                        quisquam est, qui dolorem ipsum quia dolor sit amet,
                        consectetur, adipisci velit, sed quia non numquam eius
                        modi tempora incidunt ut labore et dolore magnam aliquam
                        quaerat voluptatem. Ut enim ad minima veniam, quis
                        nostrum exercitationem ullam corporis suscipit
                        laboriosam, nisi ut aliquid ex ea commodi consequatur?
                        Quis autem vel eum iure reprehenderit qui in ea
                        voluptate velit esse quam nihil molestiae consequatur,
                        vel illum qui dolorem eum fugiat quo voluptas nulla
                        pariatur?"
                    </p>
                </div>
            </div>
        </div>
    );
}
