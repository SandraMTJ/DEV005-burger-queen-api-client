import { useState } from "react";
const StatusOrderChef = () => {
    const [selectedButton, setSelectedButton] = useState('pending');
    
    const handleButtonClick = (status) => {
        setSelectedButton(status);
      };
    
    return (
      <div className="container-status-chef">
        <label className="name-client-label">Status: </label>
        <div className="container-btns-chef">
            <button
             className={`btn-pending ${selectedButton === 'pending' ? 'selected' : ''}`}
             onClick={() => handleButtonClick('pending')}>
                Pending
            </button>
            <button
             className={`btn-delivering ${selectedButton === 'delivering' ? 'selected' : ''}`}
             onClick={() => handleButtonClick('delivering')}>
                Delivering
            </button>
        </div>
      </div>
    );
  };

export default StatusOrderChef;
