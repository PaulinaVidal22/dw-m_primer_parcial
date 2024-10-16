import { useState } from 'react';

const url = 'http://localhost:3000/dishes';

const useDeleteDish = () => {
  const [dishes, setDishes] = useState([]);
  const [error, setError] = useState(null);

  const deleteDish = async (id) => {
    try {
      await fetch(`${url}/${id}`, { method: 'DELETE' });
      const updatedDishes = dishes.filter((dish) => dish.id !== id);
      setDishes(updatedDishes);
      window.location.reload(); 
    } catch (err) {
      setError(err);
    }
  };

  const removeDish = (id) => {
    deleteDish(id).then(() => {
      setDishes(dishes.filter((dish) => dish.id !== id));
    });
  };

  return { removeDish, error };
};

export default useDeleteDish;
