import { useParams } from 'react-router-dom';
import { getCharacters } from '../utils/API';
import CharacterDisplay from '../components/CharacterDisplay';
import { useEffect, useState } from 'react';

export default function Categories() {
    const { currentClass } = useParams();
    const [characterData, setCharacterData] = useState([]);

    useEffect(() => {
        const getCharactersData = async () => {
            try {
                const response = await getCharacters(currentClass);

                if (!response.ok) {
                    throw new Error('something went wrong!');
                }

                const characters = await response.json();
                setCharacterData(characters);
            } catch (err) {
                console.error(err);
            }
        };

        getCharactersData();
    }, [currentClass]);

    return (
        <div className='w-full flex flex-col grow items-center p-6'>
            <h2 className='mb-4 text-xl md:text-3xl'>
                Currently viewing:{' '}
                <span className='stylized'>{currentClass}s</span>
            </h2>
            <div className='bg-white flex flex-col justify-baseline align-center h-auto rounded-md w-4/5'>
                <CharacterDisplay
                    creator='Creator'
                    name='Name'
                    race='Class'
                    date='Created On'
                    top={true}
                />
                {characterData &&
                    characterData
                        .slice(-8)
                        .map((character) => (
                            <CharacterDisplay
                                key={character._id}
                                name={character.name}
                                class={character.class}
                                date={character.createdDate}
                                race={character.class}
                                creator={character.creator}
                                id={character._id}
                                top={false}
                            />
                        ))}
            </div>
        </div>
    );
}
