
import { BiFoodMenu } from 'react-icons/bi';

const OrderBtn = ({ setShowOrder, countProducts, clientName, setClientNameError }) => {


    const handleClick = () => {
        (clientName ? setShowOrder(true) : setClientNameError("Client's name required"))        
    };

    return (
        <button className="btn-navBar" onClick={handleClick}>
            <BiFoodMenu className="navBar-icon" />
            Order
            <div className={`count-products ${countProducts > 0 ? '' : 'hidden'}`}>
                <span id='count-products'>{countProducts}</span>
            </div>
        </button>
    );
};

export default OrderBtn;
