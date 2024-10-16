import React, { useState, useEffect } from 'react';
import useModifyDish from '../../hooks/useModifyDish';
import './editForm.css';

const EditForm = ({ isOpen, onClose, dish }) => {
  const { modifyDish, error } = useModifyDish();
  // const {fetchItem, error: fetchItemError} = useFetchItem;
  
  const [formData, setFormData] = useState({
    name: '',
    img: '',
    description: '',
    type: '',
    steps: '',
  });

  useEffect(() => {
    if (dish) {
        // await fetchItem();
      setFormData({
        name: dish.title || '',
        img: dish.description || '',
        type: dish.number || '',
        steps: dish.steps || '', 
      });
    }
  }, [dish]);

  const handleChange = (e) => {
    const { title, value, type, checked } = e.target;
    
      setFormData({
        ...formData,
        [title]: value
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const updatedDish = {
      ...formData,
      img: formData.img,
      type: formData.type,
      steps: formData.steps, 
    };
    await modifyDish(updatedDish);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2 className='modal-title'>Edit Dish</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input 
              type="text" 
              title="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div>
            <label>Icon</label>
            <input 
              type="text" 
              title="img" 
              value={formData.img} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div>
            <label>Description</label>
            <input 
              title="description" 
              value={formData.description} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div>
            <label>Type</label>
            <input 
              title="type" 
              value={formData.type} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div>
            <label>Steps</label>
            <input 
              type="text" 
              title="steps" 
              value={formData.steps} 
              onChange={handleChange} 
              required 
            />
          </div>


          {/* <div>
            <label>Comments</label>
            <textarea 
              title="textarea" 
              value={formData.textarea} 
              onChange={handleChange} 
              className="textarea" 
            />
          </div> */}


            <button type="submit"className='submit-button' onClick={handleSubmit}>Save Changes</button>
            <button type="button" className='cancel-button' onClick={onClose}>Cancel</button>
        </form>
        {error && <p className="error-message">{error.message}</p>}
      </div>
    </div>
  );
};

export default EditForm;
