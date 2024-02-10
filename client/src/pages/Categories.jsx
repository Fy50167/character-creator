import { useParams } from 'react-router-dom';
import { getCharacters } from '../utils/API';
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
    }, []);
    console.log(currentClass);
    console.log(characterData);

    return <div></div>;
}
