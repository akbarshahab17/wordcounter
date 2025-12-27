import{ useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export const ChuckNorris = () => {
  const [joke, setJoke] = useState('');
  const [error, setError] = useState(null);

  const fetchJoke = async () => {
    try {
      const response = await fetch('https://api.chucknorris.io/jokes/random');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      // The joke text is in the 'value' field of the API response
      setJoke(data.value);
      setError(null);
    } catch (err) {
      setError(err.message);
      setJoke('Chuck Norris broke the API. No jokes for you.');
    }
  };

  // Fetch a joke when the component mounts
  useEffect(() => {
    fetchJoke();
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <div>
      <h2>Chuck Norris Joke Generator</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <p>{joke}</p>
      <button className='button2' onClick={fetchJoke}>Get New Joke</button>
      <Link to="/">
        <button className='button2' >Back To Word Counter</button>
      </Link>
    </div>
  );
};