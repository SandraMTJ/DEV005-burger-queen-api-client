import { useState } from "react";
import PropTypes from 'prop-types';

const Category = (props) => {
  // Estado para manejar el color del botón seleccionado
  const [selectedButton, setSelectedButton] = useState('breakfast');

  // Función para manejar el click de los botones de categoría
  const handleButtonClick = (category) => {
    setSelectedButton(category);
    // Cambia el estado de la categoría seleccionada que se mostrará en menupage
    props.onSelect(category);
  };

  return (
    <div className="container-category">
      <label className="name-client-label">Category: </label>
      <button
        className={`btn-breakfast ${selectedButton === 'breakfast' ? 'selected' : ''}`}
        onClick={() => handleButtonClick('breakfast')}
      >
        Breakfast
      </button>
      <button
        className={`btn-lunch ${selectedButton === 'lunch' ? 'selected' : ''}`}
        onClick={() => handleButtonClick('lunch')}>
        Lunch - Dinner
      </button>
    </div>
  );
};

export default Category;

Category.propTypes = {
  onSelect: PropTypes.func,  
};
