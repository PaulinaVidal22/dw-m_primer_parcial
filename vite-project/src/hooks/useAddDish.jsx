import { useState } from 'react';

const url = 'http://localhost:3000/dishes';

const useAddDish = () => {
  const [error, setError] = useState(null);

  const addDish = async (newDish) => {
    try {
      await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newDish),
      });
      window.location.reload(); 
      const savedDish = await response.json();
      return savedDish;
    } catch (err) {
      setError(err);
    }
  };

  const createDish = (newDish) => {
    addDish(newDish).then((savedDish) => {
      setDishes([...dishes, savedDish]);
    });
  };

  return { createDish, error };
};

export default useAddDish;
