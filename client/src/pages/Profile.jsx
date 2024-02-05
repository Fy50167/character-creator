import PERSON from '../assets/images/stock-image.jpg';
import CharacterDisplay from '../components/CharacterDisplay';

export default function Profile() {
    return (
        <div className='flex w-full h-auto md:h-full flex-col justify-evenly items-center'>
            <h1 className='text-lg md:text-3xl'>Your Profile</h1>
            <div className='bg-white w-4/5 h-1/3 p-4 rounded-md flex'>
                <div className='w-1/2 p-4'>
                    <img src={PERSON} className='m-auto h-auto w-1/2 circle' />
                </div>

                <div className='flex flex-col p-4 w-1/2 justify-evenly items-start'>
                    <h2 className='text-black font-bold'>Username</h2>
                    <p className='text-black'>Your name</p>
                    <h2 className='text-black font-bold'>Tagline</h2>
                    <p className='text-black'>This is your tagline!</p>
                </div>
            </div>
            <h2 className='text-lg md:text-2xl'>Your creations</h2>
            <div className='bg-white h-1/3 rounded-md w-4/5'>
                <CharacterDisplay
                    creator='You'
                    name='Some name'
                    race='Some race'
                    date='2/5/2024'
                />
            </div>
        </div>
    );
}
