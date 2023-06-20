import { CgClose } from 'react-icons/cg';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { BiPlusMedical } from 'react-icons/bi';
import { FaMinus } from 'react-icons/fa';


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

  const onReduceProduct = product => {
    if (product.qty === 1) {
      onDeleteProduct(product);
    } else {
      const newQuantity = product.qty - 1;
      setTotal(total - product.price);
      setCountProducts(countProducts - 1);
      setAllProducts(prevProducts =>
        prevProducts.map(prevProduct =>
          prevProduct.id === product.id ? { ...prevProduct, qty: newQuantity } : prevProduct
        )
      );
    }
  };

  const onIncreaseProduct = product => {    
      const newQuantity = product.qty + 1;
      setTotal(total + product.price);
      setCountProducts(countProducts + 1);
      setAllProducts(prevProducts =>
        prevProducts.map(prevProduct =>
          prevProduct.id === product.id ? { ...prevProduct, qty: newQuantity } : prevProduct
        )
      );
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
                      <th className='order-celd5' scope="col">
                          <FaMinus className='minus-icon' onClick={() => onReduceProduct(product)}/>
                          <span className='qty-span'>{product.qty}</span>
                          <BiPlusMedical className='plus-icon' onClick={() => onIncreaseProduct(product)}/>
                      
                      </th>
                      <th className='order-celd6' scope="col">
                        ${product.qty * product.price}.00
                        <RiDeleteBin5Line className='delete-icon' onClick={() => onDeleteProduct(product)}/>
                      </th>            
                    </tr> 
                    )
                  })}                                 
              </thead>
          </table>
        </div>
        <table className="orders-content-table">
            <thead className={`content-orders-table  ${total > 0 ? '' : 'hidden'}`}>                    
              <tr>
                  <th className='order-celd4' scope="col"></th>
                  <th className='order-celd4' scope="col">TOTAL:</th>
                  <th className='order-celd-total' scope="col">${total}.00</th>            
              </tr>                   
            </thead>
        </table>
        <button type="submit" className={`btn-send-order  ${total > 0 ? '' : 'hidden'}`}>
          Send order
        </button>

      </section>
    </>
  );
};
export default Order;