import { useState } from 'react';

const Generator = ({ length, numbers, symbols, lowercase, uppercase, excludeText}) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Convert true and false into 1 or 0
  const numbersToInt = numbers ? 0 : 1;
  const symbolsToInt = symbols ? 0 : 1;
  const lowercaseToInt = lowercase ? 0 : 1;
  const uppercaseToInt = uppercase ? 0 : 1;

  const generatePassword = () => {
    setIsLoading(true);
    setError(null);

    fetch(`https://api.boostr.cl/passwords/generate.json?length=${length}&numbers=${numbersToInt}&symbols=${symbolsToInt}&lowercase=${lowercaseToInt}&uppercase=${uppercaseToInt}&exclude=${excludeText}`)
      .then(response => response.json())
      .then(data => setData(data.data))
      .catch(error => setError(error))
      .finally(() => setIsLoading(false));
  };

  if (isLoading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Ha ocurrido un error: {error.message}</p>;
  }

  return (
    <>
      <button onClick={generatePassword}>Generate Password</button>
      {data && (
        <div>
          <h2>Password Generated: {data}</h2>
        </div>
      )}
    </>
  );
};

export default Generator;
