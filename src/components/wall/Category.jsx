import { useState } from "react";

const Category = (props) => {
    const [selectedButton, setSelectedButton] = useState('breakfast');
  
    const handleButtonClick = (category) => {
      setSelectedButton(category);
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
