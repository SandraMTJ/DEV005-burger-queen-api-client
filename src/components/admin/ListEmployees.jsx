import { useState, useEffect } from "react";

const ListEmployees = (props) => {

    const [employees, setEmployees] = useState([]);

    // Llamar al token almacenado
    const token = localStorage.getItem('token');

    useEffect(() => {
        // Solicitud a la API para traer los usuarios
        fetch('http://localhost:8080/users', {
            headers: {
            'Authorization': `Bearer ${token}`,
            },
        })
        .then(response => response.json())
        .then(data => {
            // Filtramos los usuarios y guardamos las que tienen status delivering
            const fetchEmployees = data.filter(user => user.role === props.role);
            setEmployees(fetchEmployees);
        })
        .catch(error => {
            console.error('API error:', error);
        });
    }, []);



    return (
       <>
         <table className="table-employees">
            <thead>
                <tr>
                    <th colSpan="3" className = "title-tables-admin">{props.role[0].toUpperCase()+props.role.substring(1)}s</th>
                </tr> 
            </thead>   
            <tbody>   
            {employees.map((user) => (
                <tr key={user.id} className="employees-row">
                    <td className='celd-email'>{user.email}</td>
                    <td className='celd-edit'><button className="btns-tables-edit">Edit</button></td>
                    <td className='celd-delete'><button className="btns-tables-delete">Delete</button></td>            
                </tr>   
                )) }       
            </tbody>                   
        </table>
       </>
    );
};

export default ListEmployees;


// AdminView.propTypes = {
//     selectedOptionsAdmin: PropTypes.string,
//     setSelectedOptionsAdmin: PropTypes.func,
//     setShowAdminView: PropTypes.func,
// };