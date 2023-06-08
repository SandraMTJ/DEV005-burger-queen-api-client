import Background from "../basics/background";
import Logo from "../../assets/logo.png"
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai';

const Login = () => {
    return (
        <>        
            <Background />
            <section className="section-login">

                <div className="login-container">
                <div>
                  <img src={Logo} alt="logo" className="logo-login" />
                </div>
                  <form className="form">      
                  
                      <div className="input-login-container">           
                      <AiOutlineMail className="email-icon" />   
                      <input
                        type="text"
                        className="input-login"
                        id="email"
                        placeholder="Email" 
                      />             
                      </div>  

                
                      <div className="input-login-container">  
                      <AiOutlineLock className="password-icon" />
                      <input
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
