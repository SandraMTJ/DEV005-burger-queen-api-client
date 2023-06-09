import Background from "../components/background.jsx";
import LoginForm from "../components/login/loginform.jsx";
import LogoLogin from "../components/login/logologin.jsx";

const Login = () => {    

    return (
        <>        
          <Background />
          <section className="section-login">
            <div className="login-container">
              <LogoLogin/>
              <LoginForm/>
            </div>
          </section>
        </>
    );
};

export default Login;
