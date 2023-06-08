import Background from "../components/background.jsx";
import Logo from "../assets/logo.png";
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai';
//import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';

const Login = () => {
    
    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {

      console.log(data.email)
      console.log(data.password)

      fetch('http://localhost:8080/login',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(({ email: data.email, password: data.password }))
    })
    .then((res) => res.json())
    .then((data) =>{
      console.log(data)
    })

  }


    return (
        <>        
            <Background />
            <section className="section-login">

                <div className="login-container">
                <div>
                  <img src={Logo} alt="logo" className="logo-login" />
                </div>
                  <form className="form" onSubmit={handleSubmit(onSubmit)}>      
                  
                      <div className="input-login-container">           
                      <AiOutlineMail className="email-icon" />   
                      <input {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                        type="text"
                        className="input-login"
                        id="email"
                        placeholder="Email" 
                      />             
                      </div>  
                
                      <div className="input-login-container">  
                      <AiOutlineLock className="password-icon" />
                      <input {...register('password', { required: true})}
                        type="password"
                        className="input-login"
                        id="password"
                        placeholder="Password"
                      />   
                      </div>     

                      <button type="submit" className="submit-btn">
                        <span className="transition"></span>
                        <span className="gradient"></span>
                        <span className="label">Submit</span>
                      </button>
                    
                    
                  </form>
                </div>
            </section>
        </>
    );
};


export default Login;
