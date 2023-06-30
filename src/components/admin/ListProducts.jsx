import { useState } from "react";

const ListProducts = (props) => {

    const [products, setProducts] = useState([]);

    // Llamar al token almacenado
    const token = localStorage.getItem('token');

    // Solicitud a la API para traer los productos
    fetch('http://localhost:8080/products', {
        headers: {
        'Authorization': `Bearer ${token}`,
        },
    })
    .then(response => response.json())
    .then(data => {
        // Filtramos los usuarios y guardamos las que tienen status delivering
        const fetchProducts = data.filter(product => product.type === props.type);
        setProducts(fetchProducts);
    })
    .catch(error => {
        console.error('API error:', error);
    });



    return (
       <>
         <table className="table-employees">
            <thead>
                <tr>
                    <th colSpan="3" className = "title-tables-admin">{props.type[0].toUpperCase()+props.type.substring(1)}</th>
                </tr> 
            </thead>   
            <tbody>   
            {products.map((product) => (
                <tr key={product.id} className="employees-row">
                    <td className='celd-email'>{product.name}</td>
                    <td className='celd-edit'><button className="btns-tables-edit">Edit</button></td>
                    <td className='celd-delete'><button className="btns-tables-delete">Delete</button></td>            
                </tr>   
                )) }       
            </tbody>                   
        </table>
       </>
    );
};

export default ListProducts;


// AdminView.propTypes = {
//     selectedOptionsAdmin: PropTypes.string,
//     setSelectedOptionsAdmin: PropTypes.func,
//     setShowAdminView: PropTypes.func,
// };