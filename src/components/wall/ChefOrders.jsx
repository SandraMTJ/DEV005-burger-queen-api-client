import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { BsSquare, BsCheckSquare } from 'react-icons/bs';
import handleChangeStatus from "./handleChangeStatus";
const ChefOrders = (props) => {
    const [ordersChef, setOrdersChef] = useState([])
    const [iconClicked, setIconClicked] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
    
        fetch('http://localhost:8080/orders', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        })
          .then(response => response.json())
          .then(data => {
            const filteredOrders = data.filter(order => order.status === props.selectedOrderStatusChef);
            setOrdersChef(filteredOrders);
          })
          .catch(error => {
            console.error('API error:', error);
          });
          setIconClicked(false);
      }, [props.selectedOrderStatusChef, iconClicked]);   
      
      const handleIconClick = (order, newStatus) => {
        handleChangeStatus(order, newStatus);
        setIconClicked(true);
      };


    return(
        <>
            <div className= "container-chef-orders">
                {ordersChef.map(order => (
                <div key={order.id} className='card-order-chef'>
                    <span className="client-name-chef-orders">Client: {order.client}</span>
                    {order.products.map(product => (
                        <li key={product.id}>
                            {product.qty} {product.name}
                        </li>
                    ))}
                    <div className="check-and-hour">
                        {props.selectedOrderStatusChef === 'pending' ? <BsSquare className="icon-check-status-chef" onClick={() => handleIconClick(order, 'delivering')}/> : <BsCheckSquare className="icon-check-status-chef" onClick={() => handleIconClick(order, 'pending')}/>}
                    </div>    
                    <span className="hour">Entry hour: {order.dateEntry}</span>      
                </div>
                ))}
            </div>        
        </>
    )
}

export default ChefOrders;

ChefOrders.propTypes = {
    selectedOrderStatusChef: PropTypes.string, 
  };