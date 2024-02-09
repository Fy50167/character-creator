import { NavLink } from 'react-router-dom';

export default function CharacterDisplay(props) {
    const { creator, name, race, date, top, id } = props;
    let formattedDate = date; // Initialize with the original date value

    if (!top) {
        formattedDate = new Date(date).toLocaleDateString('en-US');
    }
    return id ? (
        <NavLink to={`/character/${id}`}>
            <div
                className={`w-full flex text-black text-xs md:text-lg py-4 text-center ${
                    top ? 'font-bold' : 'display-top'
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
                    <p className='text-inherit'>{formattedDate}</p>
                </div>
            </div>
        </NavLink>
    ) : (
        <div
            className={`w-full flex text-black text-xs md:text-lg py-4 text-center ${
                top ? 'font-bold' : 'display-top'
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
                <p className='text-inherit'>{formattedDate}</p>
            </div>
        </div>
    );
}
