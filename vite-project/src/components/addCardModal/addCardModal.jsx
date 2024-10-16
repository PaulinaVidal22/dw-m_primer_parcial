import React, { useState } from 'react';
import useAddDish from '../../hooks/useAddDish';
import './addCardModal.css'

const AddCardModal = ({ isOpen, onClose }) => {
  const { createDish, error } = useAddDish();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    img: '',
    type: '',
    steps: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newDish = {
      ...formData,
      img: formData.img,
      type: formData.type,
      steps: formData.steps,
    };
    await createDish(newDish);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2 className='modal-name'>Add New Recipe!</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>

          <div>
            <label>Icon</label>
            <input type="text" name="img" value={formData.img} onChange={handleChange} required />
          </div>

          <div>
            <label>Description</label>
            <input name="description" value={formData.description} onChange={handleChange} required />
          </div>
          
          <div>
            <label>Type</label>
            <input type="text" name="type" value={formData.type} onChange={handleChange} required />
          </div>

          <div>
            <label>Steps</label>
            <input type="text" name="steps" value={formData.steps} onChange={handleChange} required />
          </div>

          <button type="submit"className='submit-button' onClick={handleSubmit}>Save Dish</button>
          <button type="button" className='cancel-button' onClick={onClose}>Cancel</button>
        </form>

        {error && <p className="error-message">{error.message}</p>}

      </div>
    </div>
  );
};

export default AddCardModal;
