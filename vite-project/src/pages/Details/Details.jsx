import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import useFetchDish from '../../hooks/useFetchDish';
import EditForm from '../../components/editForm/editForm.jsx';
import './Details.css'

const Details = () => {
  const navigate = useNavigate();
  const { dish, loading, error } = useFetchDish();

  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const handleEdit = () => {
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
  };
  

  return (
    <>
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error.message}</div>}
        {!dish && <div>Dish not found</div>}
       {!loading && !error && dish && (
          <div className='dish-details'>
            <div className='buttons'>
            <button 
              className="back-button button is-primary"
              onClick={() => navigate("/recipes")}>
              {"<"} go back
            </button>

            <button className='edit-button' onClick={handleEdit}>Edit Recipe</button>

            </div>

            <div className="dish-info">
              <h2 className='dish-name title-is-4'>
                {dish.name} 
                <p className='dish-icon'>{dish.img} </p>
                </h2>

              <p className='dish-description'>
                <strong className='description-field title-is-6'>Description: </strong>
                {dish.description}
              </p>

              <p className='dish-type'>
                <strong className='type-field title-is-6'>Type: </strong>
                {dish.categories}
              </p>

              <p className='dish-steps'>
                <strong className='steps-field title-is-6'>Steps: </strong>
                {dish.steps}
              </p>

            </div>
            <EditForm
                isOpen={isEditModalOpen}
                onClose={closeEditModal}
                dish={dish}
              />
          </div>
         )} 
    </>
  );
};

export default Details;