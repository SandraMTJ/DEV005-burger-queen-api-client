import { CgClose } from 'react-icons/cg';
import { RiDeleteBin5Line } from 'react-icons/ri';

const Order = ({ setShowOrder, allProducts, setAllProducts, total, clientName, setCountProducts, setTotal, countProducts }) => { // Pass the setShowOrder function as a prop

  
  const handleClick = () => {
    setShowOrder(false); // Set showOrder to false when clicked
  };

  const onDeleteProduct = product => {
		const results = allProducts.filter(
			item => item.id !== product.id
		);

		setTotal(total - product.price * product.qty);
		setCountProducts(countProducts - product.qty);
		setAllProducts(results);
	};
 

  return (
    <>
      <CgClose className="icon-close-order" onClick={handleClick} /> 
      <section className="section-orders">
        <h1 className="order-title">Order</h1>
        <div className='container-name-client-order'>
            <span className='name-client-order'>Client: {clientName}</span>
        </div>
        <table className="orders-title-table">
            <thead className="titles-orders-table">                    
                <tr>
                    <th className='order-celd1' scope="col">Product</th>
                    <th className='order-celd2' scope="col">Quantity</th>
                    <th className='order-celd3' scope="col">Price
                    
                    </th>            
                </tr>                   
             </thead>
         </table>
        <div className="order-container">         
          <table className="orders-content-table">
              <thead className="content-orders-table">
                  {allProducts.map(product =>{
                    return(
                    <tr key = {product.id}>
                      <th className='order-celd4' scope="col">{product.name}</th>
                      <th className='order-celd5' scope="col">{product.qty}</th>
                      <th className='order-celd6' scope="col">${product.qty * product.price}.00
                      <RiDeleteBin5Line className='delete-icon' onClick={() => onDeleteProduct(product)}/>
                      </th>            
                    </tr> 
                    )
                  })}                                 
              </thead>
          </table>   
        </div>
        <table className="orders-content-table">
              <thead className="content-orders-table">                    
                <tr>
                    <th className='order-celd4' scope="col"></th>
                    <th className='order-celd4' scope="col">TOTAL:</th>
                    <th className='order-celd-total' scope="col">${total}.00</th>            
                </tr>                   
             </thead>
         </table>
      </section>
    </>
  );
};
export default Order;