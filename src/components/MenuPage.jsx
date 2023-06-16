import { useState, useEffect } from 'react';
import Category from './wall/Category';
import ClientName from './wall/ClientName';
import { BiPlusMedical } from 'react-icons/bi';

const ProductContainer = ({ selectedMenu }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');

    fetch('http://localhost:8080/products', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        const filteredProducts = data.filter(product => product.type === selectedMenu);

        setProducts(filteredProducts);
      })
      .catch(error => {
        console.error('API error:', error);
      });
  }, [selectedMenu]);

  return (
    <section className='section-menu'>
      <div className="container-products">
        {products.map(product => (
          <div key={product.id} className='card-product'>
            <button className='btn-add-product'><BiPlusMedical/></button>
            <span>{product.name}</span>
            <div className='img-container'>
              <img src={product.image} alt={product.image} className="product-image" />
            </div>
            <span>${product.price}.00</span>
          </div>
        ))}
      </div>
    </section>
  );
};

const MenuPage = () => {
  const [selectedMenu, setSelectedMenu] = useState('breakfast');

  const handleMenuSelect = (menu) => {
    setSelectedMenu(menu);
  };

  return (
    <>
      <Category onSelect={handleMenuSelect} />
      <ClientName />
      <ProductContainer selectedMenu={selectedMenu} />
    </>
  );
};

export default MenuPage;