import { useState, useEffect } from 'react';

const url = 'http://localhost:3000/dishes';

const useFetchDishes = () => {

  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDishes = async () => {
    try {
      const response = await fetch(url, { method: "GET" });
      const data = await response.json();

      setDishes(data);
      setLoading(false);
    } catch (err) {

      setError(err);
      setLoading(false);

    }
  };

  useEffect(() => {
    fetchDishes(); 
  }, []); 


  return { dishes, loading, error };
};

export default useFetchDishes;