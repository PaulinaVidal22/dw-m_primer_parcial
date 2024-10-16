import { useState } from 'react';
import { useParams} from 'react-router-dom';

const useModifyDish = () => {
  const { id } = useParams();

  const url = `http://localhost:3000/dishes/${id}`;

  const [error, setError] = useState(null);


  // alternativa? pasa param id y la url va dentro de esta func, no usa useParams
  const modifyDish = async (updatedItem) => {
    
    try {
      const response = await fetch(url, {
        method: 'PUT',  
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedItem),
      });

      if (!response.ok) {
        throw new Error('Error updating item');
      }

      const data = await response.json();

      return data;
    } catch (err) {
      setError(err);
    }
  };

  return { modifyDish, error };
};

export default useModifyDish;
