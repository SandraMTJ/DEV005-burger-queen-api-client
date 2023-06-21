import { useState, useEffect } from 'react';
import Category from './wall/Category';
import ClientName from './wall/ClientName';
import { BiPlusMedical } from 'react-icons/bi';
import ModalOrder from './wall/ModalOrder';

const ProductContainer = (props) => {
  const [products, setProducts] = useState([]);

  const onAddProduct = product => {
		if (props.allProducts.find(item => item.id === product.id)) {
			const products = props.allProducts.map(item =>
				item.id === product.id
					? { ...item, qty: item.qty + 1 }
					: item
			);
      props.setTotal(props.total + product.price * product.qty);
			props.setCountProducts(props.countProducts + product.qty);
			return props.setAllProducts([...products]);
		}

    props.setTotal(props.total + product.price * product.qty);
		props.setCountProducts(props.countProducts + product.qty);
		props.setAllProducts([...props.allProducts, product]);
	};

  useEffect(() => {
    const token = localStorage.getItem('token');

    fetch('http://localhost:8080/products', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        const filteredProducts = data.filter(product => product.type === props.selectedMenu);

        setProducts(filteredProducts);
      })
      .catch(error => {
        console.error('API error:', error);
      });
  }, [props.selectedMenu]);

  return (
    <section className='section-menu'>
      <div className="container-products">
        {products.map(product => (
          <div key={product.id} className='card-product'>
            <button className='btn-add-product' onClick={() => onAddProduct(product)}><BiPlusMedical/></button>
            <span>{product.name}</span>
            <div className='img-container'>
              <img src={product.image} alt={product.name} className="product-image" />
            </div>
            <span>${product.price}.00</span>
          </div>
        ))}
      </div>
    </section>
  );
};

const MenuPage = (props) => {
  const [selectedMenu, setSelectedMenu] = useState('breakfast');

  const handleMenuSelect = (menu) => {
    setSelectedMenu(menu);
  };
  console.log(props.showModalOrder)
  

  return (
    <>    
      {(props.showModalOrder ? <ModalOrder setShowModalOrder = {props.setShowModalOrder}/> : '')}                   
      <Category onSelect={handleMenuSelect} />
      <ClientName 
        setClientName = {props.setClientName} 
        clientNameError = {props.clientNameError} 
        setClientNameError = {props.setClientNameError}
      />
      <ProductContainer 
      selectedMenu={selectedMenu} 
      setAllProducts = { props.setAllProducts } 
      allProducts = {props.allProducts}
      total={props.total}
      setTotal={props.setTotal}
      countProducts={props.countProducts}
      setCountProducts={props.setCountProducts}
      />
    </>
  );
};

export default MenuPage;