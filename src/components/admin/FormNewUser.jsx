import { CgClose } from "react-icons/cg";
import { HiOutlineUsers } from 'react-icons/hi';
import {MdKeyboardArrowDown} from 'react-icons/md';
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";
import { useForm } from 'react-hook-form';
import { useState } from "react";


const FormNewUser = (props) => {
    const [selectedRole, setSelectedRole] = useState('');
    
    // Llamado a funciones para formularios
    const { register, handleSubmit, formState: { errors }, setError } = useForm()

    // Obtener token almacenado en localStorage
    const token = localStorage.getItem('token');

    // Manejar el envío del formulario y hacer la solicitud de la api para iniciar sesión
    const onSubmit = (data) => {
        
        //Solicitud a la api para crear usuario

        fetch('http://localhost:8080/users',{
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
        props.setShowFormUser(false)         
    }

    
    return (
        <>
            <section className="section-new-employee">
                <CgClose className="icon-close-form-user" onClick = {handleClickClose}/>
                <h1 className="new-employee-title">New employee</h1> 
                <form className="form-new-employee" onSubmit={handleSubmit(onSubmit)}> 
                    <div className="select-container">  
                        <HiOutlineUsers className="email-icon"/>
                        <select defaultValue={selectedRole} {...register('role', { required: 'Role is required' })} className = "select-role">
                            <option value="" disabled>Role</option>
                            <option value="admin">Admin</option>
                            <option value="waiter">Waiter</option>
                            <option value="chef">Chef</option>
                        </select>
                        <MdKeyboardArrowDown className="arrow-icon"/>
                        {errors.role && <p className="error-message">{errors.role.message}</p>}1
                    </div> 
                    <div>           
                        <AiOutlineMail className="email-icon" />   
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
            
                    <div>  
                        <AiOutlineLock className="password-icon" />
                        <input
                            {...register('password', { 
                                required: 'Password required',
                                minLength: {
                                    value: 4,
                                    message: 'Password too short',
                                },
                             })}
                            type="password"
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

export default FormNewUser;


// OptionsAdmin.propTypes = {
//   selectedOptionsAdmin: PropTypes.string,
//   setSelectedOptionsAdmin: PropTypes.func,
// };
