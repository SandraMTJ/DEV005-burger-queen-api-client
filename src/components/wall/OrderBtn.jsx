
import { BiFoodMenu } from 'react-icons/bi';

const OrderBtn = ({ setShowOrder, countProducts }) => {


    return (
            <button className="btn-navBar"  onClick={() => setShowOrder(true)}>
                <BiFoodMenu className="navBar-icon" />
                Order
                <div className={`count-products ${countProducts>0 ? '':'hidden'}`}>
					<span id='count-products'>{countProducts}</span>
				</div>
            </button>
    );
};

export default OrderBtn;
