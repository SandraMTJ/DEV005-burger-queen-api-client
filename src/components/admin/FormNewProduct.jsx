import { CgClose } from "react-icons/cg";
import { HiOutlineUsers } from 'react-icons/hi';
import {MdKeyboardArrowDown, MdAttachMoney} from 'react-icons/md';
import { IoFastFoodOutline } from 'react-icons/io5';
import { useForm } from 'react-hook-form';
import { useState } from "react";


const FormNewProduct = (props) => {
    const [selectedType, setSelectedType] = useState('');
    
    // Llamado a funciones para formularios
    const { register, handleSubmit, formState: { errors }, setError } = useForm()

    // Obtener token almacenado en localStorage
    const token = localStorage.getItem('token');

    // Manejar el envío del formulario y hacer la solicitud de la api para iniciar sesión
    const onSubmit = (data) => {
        
        //Solicitud a la api para crear usuario

        fetch('http://localhost:8080/products',{
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            // Se envía token de autorización
            'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(data)
        })
        .then((res) => {        
            if (res.status === 400) {
                setError('email', { type: 'invalid', message: 'Email already exists' });          
            } else{
                handleClickClose();
            }
        })
        .catch((err) => {
        console.log(err)
        })
      
    }
    // Cerrar el formulario
    const handleClickClose = () => {
        props.setShowFormProduct(false)         
    }

    
    return (
        <>
            <section className="section-new-product">
                <CgClose className="icon-close-form-product" onClick = {handleClickClose}/>
                <h1 className="new-product-title">New product</h1> 
                <form className="form-new-product" onSubmit={handleSubmit(onSubmit)}> 
                    
                    <div>           
                        <IoFastFoodOutline className="burger-icon" />   
                        <input
                            {...register('email', {
                                required: 'Email required',
                                pattern: {
                                value: /^\S+@\S+$/i,
                                message: 'Invalid email'
                                }
                            })}
                            type="text"
                            className="input-new-employee"
                            id="email"
                            placeholder="Email"
                            />     
                        {errors.email && <p className="error-message">{errors.email.message}</p>}                  
                    </div>  
                    <div className="select-container">  
                        <HiOutlineUsers className="email-icon"/>
                        <select defaultValue={selectedType} {...register('type', { required: 'Type is required' })} className = "select-type">
                            <option value="" disabled>Type</option>
                            <option value="breakfast">Breakfast</option>
                            <option value="lunch">Lunch - Dinner</option>
                           
                        </select>
                        <MdKeyboardArrowDown className="arrow-icon"/>
                        {errors.role && <p className="error-message">{errors.role.message}</p>}1
                    </div>        
                    <div>  
                        <MdAttachMoney className="price-icon" />
                        <input
                            {...register('price', { 
                                required: 'Price required',
                                
                             })}
                            type="text"
                            className="input-new-employee"
                            id="password"
                            placeholder="Password"
                        />
                        {errors.password && <p className="error-message">{errors.password.message}</p>}                        
                    </div>     

                    <button type="submit" className="submit-btn">Create</button>
                </form>        
            </section>
        </>
    );
  };

export default FormNewProduct;


// OptionsAdmin.propTypes = {
//   selectedOptionsAdmin: PropTypes.string,
//   setSelectedOptionsAdmin: PropTypes.func,
// };
