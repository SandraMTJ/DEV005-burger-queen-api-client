import Background from "../components/Background.jsx";
import LoginForm from "../components/login/LoginForm.jsx";
import LogoLogin from "../components/login/LogoLogin.jsx";

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
