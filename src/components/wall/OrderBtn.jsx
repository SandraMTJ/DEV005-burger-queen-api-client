
import { BiFoodMenu } from 'react-icons/bi';
import PropTypes from 'prop-types';

const OrderBtn = (props) => {

    // Función para mostrar error si no se ingresa nombre del cliente o para mostrar el listado de la orden
    const handleClick = () => {
        (props.clientName ? props.setShowOrder(true) : props.setClientNameError("Client's name required"))        
    };

    return (
        <button className="btn-navBar" onClick={handleClick}>
            <BiFoodMenu className="navBar-icon" />
            Order
            {/* Si no hay productos añaidos a la orden, no se muestra el círculo, si sí, se muestra el círculo con la cantidad */}
            <div className={`count-products ${props.countProducts > 0 ? '' : 'hidden'}`}>
                <span id='count-products'>{props.countProducts}</span>
            </div>
        </button>
    );
};

export default OrderBtn;

OrderBtn.propTypes = {
    setShowOrder: PropTypes.func,
    clientName: PropTypes.string,
    setClientNameError: PropTypes.func,
    countProducts: PropTypes.number, 
};