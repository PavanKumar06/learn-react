import { useState } from 'react';

export default function Form() {
  const [person, setPerson] = useState({
                                name: 'Niki de Saint Phalle',
                                artwork: {
                                  title: 'Blue Nana',
                                  city: 'Hamburg',
                                  image: 'https://i.imgur.com/Sd1AgUOm.jpg',
                                }
                              });

  function handleCityChange(e) {
    //We create a shallow copy in which everything remains the same except for city
    const nextArtwork = { ...person.artwork, city: e.target.value };
    const nextPerson = { ...person, artwork: nextArtwork };
    //we are creating a new object and updating using this, we are not updating the object, as all objects must be readonly
    setPerson(nextPerson);
  }


  return (
    <>
      <label>
        City:
        <input
          value={person.artwork.city}
          onChange={handleCityChange}
        />
      </label>
      <p>
        {person.name}{' '}
        {person.artwork.title}{' '}
        ({person.artwork.city})
      </p>
    </>
  );
}
