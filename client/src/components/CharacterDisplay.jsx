export default function CharacterDisplay(props) {
    const { creator, name, race, date, bold } = props;

    return (
        <div
            className={`w-full flex text-black text-lg p-4 text-center ${
                bold ? 'font-bold' : ''
            }`}
        >
            <div className='w-1/4 text-inherit display-border'>
                <p className='text-inherit'>{creator}</p>
            </div>
            <div className='w-1/4 text-inherit display-border'>
                <p className='text-inherit'>{name}</p>
            </div>
            <div className='w-1/4 text-inherit display-border'>
                <p className='text-inherit'>{race}</p>
            </div>
            <div className='w-1/4 text-inherit'>
                <p className='text-inherit'>{date}</p>
            </div>
        </div>
    );
}
