export default function CharacterDisplay(props) {
    const { creator, name, race, date, bold } = props;

    return (
        <div
            className={`w-full flex text-black text-xs md:text-lg py-4 display-top text-center ${
                bold ? 'font-bold' : ''
            }`}
        >
            <div className='w-1/4 px-2 text-inherit display-border flex items-center justify-center'>
                <p className='text-inherit'>{creator}</p>
            </div>
            <div className='w-1/4 px-2 text-inherit display-border flex items-center justify-center'>
                <p className='text-inherit'>{name}</p>
            </div>
            <div className='w-1/4 px-2 text-inherit display-border flex items-center justify-center'>
                <p className='text-inherit'>{race}</p>
            </div>
            <div className='w-1/4 px-2 text-inherit flex items-center justify-center'>
                <p className='text-inherit'>{date}</p>
            </div>
        </div>
    );
}
