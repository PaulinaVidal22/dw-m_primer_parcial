import React, { useState } from 'react';
import CardsSection from '../../components/cardsSection/cardsSection.jsx';
import AddCardModal from '../../components/addCardModal/addCardModal.jsx';
import useFetchDishes from '../../hooks/useFetchDishes.jsx';
import useDeleteDish from '../../hooks/useDeleteDish';
import { useNavigate } from 'react-router-dom';
import './Recipes.css';

const Recipes = () => {
  const { dishes, loading, error } = useFetchDishes();
  const { removeDish, error: deleteError} = useDeleteDish();
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const handleShowDetails = (id) => {
    navigate(`/recipes/${id}`);
  };

  const handleDelete = async (id) => {
    await removeDish(id);
  };



    const handleAdd = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };


  return (
    <>
      
      <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <h1 className='app-title'><strong>Recipes</strong></h1>
      </nav>

      <div className="main-content">
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error.message}</div>}
        {!loading && !error && (
          <>
            <button className='add-button' onClick={handleAdd}>+ Add Dish</button>
            <CardsSection dishes={dishes} onDelete={handleDelete} onShowDetails={handleShowDetails} />
            <AddCardModal isOpen={isModalOpen} onClose={closeModal} />
          </>
        )}
      </div>

    </>
  );
};

export default Recipes;
