import Background from "../basics/background";
import Logo from "../../assets/logo.png"
import { AiOutlineMail } from 'react-icons/ai';

const Login = () => {
    return (
        <>
        
            <Background />
            <section className="section-login">

                <div>
                  <img src={Logo} alt="logo" className="logo-login" />
                </div>
                <div className="login-container">
                  <form className="form">      
                    <div className="mb-3">
                   
                      <label htmlFor="email" className="form-label">
                      <AiOutlineMail className="email-icon" />            
                        Email
                        
                      <input
                        type="text"
                        className="form-control input-login"
                        id="email"
                        placeholder="Enter your email" 
                      />  
                      </label>                
                    </div>   
                    <div className="mb-3">

                    
                      <label htmlFor="password" className="form-label">
                        Password                      
                      
                      <input
                        type="password"
                        className="form-control input-login"
                        id="password"
                        placeholder="Enter your password"
                      />              

                      </label>
                    </div>      
                    <div className="text-center">
                      <button type="submit" className="submit-btn">
                        <span className="transition"></span>
                        <span className="gradient"></span>
                        <span className="label">Submit</span>
                      </button>
                    </div>
                    
                  </form>
                </div>
            </section>
        </>
    );
};

export default Login;
