import CharacterDisplay from '../components/CharacterDisplay';

export default function Home() {
    return (
        <section className='w-full h-full flex flex-col justify-center items-center'>
            <div className='text-center'>
                <h2 className='stylized text-xl md:text-3xl'>
                    Welcome to the Character Creator!
                </h2>
            </div>

            <div className='flex flex-col justify-center items-center w-4/5 '>
                <h3 className='text-lg md:text-xl'>
                    Here's what people have made...
                </h3>
                <div className='bg-white rounded-md w-full'>
                    <CharacterDisplay
                        creator='Created by'
                        name='Name'
                        race='Race'
                        date='Created on'
                        bold={true}
                    />
                </div>
            </div>
        </section>
    );
}
