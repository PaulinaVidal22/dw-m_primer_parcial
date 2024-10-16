import { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';

const useFetchDish = () => {

  const { id } = useParams();

  const url = `http://localhost:3000/dishes/${id}`;

  const [dish, setDish] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const fetchDish = async () => {
    try {
      const response = await fetch( url , { method: "GET" })
      const data = await response.json();
      setDish(data);
      setLoading(false);

    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchDish(); 
    }
  }, [id]);

  return { dish, loading, error };
};

export default useFetchDish;
