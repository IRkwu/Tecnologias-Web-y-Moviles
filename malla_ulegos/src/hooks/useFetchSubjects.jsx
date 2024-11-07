import { useState, useEffect } from 'react';

const useFetchSubjects = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    fetch('src/mocks/subjects.json')
      .then(response => response.json())
      .then(data => setData(data.subjects))
      .catch(error => setError(error))
      .finally(() => setIsLoading(false));
  }, []);

  return { data, isLoading, error };
};

export default useFetchSubjects;