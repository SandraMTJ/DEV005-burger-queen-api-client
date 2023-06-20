import { CgClose } from 'react-icons/cg';

const Order = ({ setShowOrder, allProducts }) => { // Pass the setShowOrder function as a prop

  const handleClick = () => {
    setShowOrder(false); // Set showOrder to false when clicked
  };
 

  return (
    <>
      <CgClose className="icon-close-order" onClick={handleClick} /> 
      <section className="section-orders">
        <h1 className="order-title">Order</h1>
        <div className='container-name-client-order'>
            <span className='name-client-order'>Client: </span>
        </div>
        <table className="orders-title-table">
            <thead className="titles-orders-table">                    
                <tr>
                    <th className='order-celd1' scope="col">Product</th>
                    <th className='order-celd2' scope="col">Quantity</th>
                    <th className='order-celd3' scope="col">Price</th>            
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
                    <th className='order-celd6' scope="col">${product.qty * product.price}.00</th>            
                  </tr> 
                  )
                })}       
                   
                              
             </thead>
         </table>                  
        </div>
      </section>
    </>
  );
};
export default Order;