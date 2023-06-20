import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const LoginForm = () => {

    const [token, setToken] = useState('');
    const [userRole, setUserRole] = useState('');
    
    const { register, handleSubmit, formState: { errors }, setError } = useForm()
   
    const navigate = useNavigate();
    const onSubmit = (data) => {
        fetch('http://localhost:8080/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(({ email: data.email, password: data.password }))
        })
        .then((res) => {
            if (res.status === 400) {
                setError('password', { type: 'invalid', message: 'Invalid credentials' });          
            }
            return res.json();
          })
        .then((data) =>{              
            
            setToken(data.accessToken);
            setUserRole(data.user.role);
            localStorage.setItem('token', data.accessToken);
            localStorage.setItem('userRole', data.user.role); 
            
            if(data){
                navigate('/wall');
            }  
        })
    }

    return (                
        <form className="form" onSubmit={handleSubmit(onSubmit)}>      
            <div className="input-login-container">           
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
                    className="input-login"
                    id="email"
                    placeholder="Email"
                    />     
                {errors.email && <p className="error-message">{errors.email.message}</p>}                  
            </div>  
    
            <div className="input-login-container">  
                <AiOutlineLock className="password-icon" />
                <input
                    {...register('password', { required: 'Password required' })}
                    type="password"
                    className="input-login"
                    id="password"
                    placeholder="Password"
                />
                {errors.password && <p className="error-message">{errors.password.message}</p>}
                  
            </div>     

            <button type="submit" className="submit-btn">Submit</button>
        </form>        
    );
};


export default LoginForm;
