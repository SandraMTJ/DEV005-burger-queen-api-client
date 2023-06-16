
import { BiFoodMenu } from 'react-icons/bi';

const OrderBtn = ({ setShowOrder }) => {


    return (
            <button className="btn-navBar"  onClick={() => setShowOrder(true)}>
                <BiFoodMenu className="navBar-icon" />
                Order
            </button>
    );
};

export default OrderBtn;
