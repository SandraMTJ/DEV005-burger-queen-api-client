import { useState, useEffect } from 'react';

const BreakfastProducts = () => {
 
  const [breakfastProducts, setBreakfastProducts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token')
    // Lógica para traer los productos desde la API
    fetch('http://localhost:8080/products', {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    })
      .then(response => response.json())
      .then(data => setBreakfastProducts(data));
      
  }, []);
  console.log(breakfastProducts)
  return (
    
    <div>
      <h1>Products</h1>
      
        {breakfastProducts.map(breakfastProduct => (
          <div key={breakfastProduct.id} className='prueba'>
            {breakfastProduct.name} - {breakfastProduct.price}
            <img src={breakfastProduct.image} alt="" />
          </div>
        ))}
      
    </div>
  );
};

export default BreakfastProducts;
