import CharacterCategories from '../components/CharacterCategories';

export default function Home() {
    return (
        <section className='w-full h-full flex grow py-8 flex-col justify-center items-center home'>
            <div className='text-center'>
                <h1 className='stylized text-xl md:text-4xl'>
                    Welcome to the Character Creator!
                </h1>
            </div>

            <div className='flex grow flex-col justify-center items-center w-4/5 mt-10'>
                <h3 className='text-lg md:text-xl'>
                    Scroll to view what people have made so far!
                </h3>
                <div className='grow rounded-md w-full mt-4 flex flex-col home-canvas'>
                    <CharacterCategories />
                </div>
            </div>
        </section>
    );
}
