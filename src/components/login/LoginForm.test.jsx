
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import LoginForm from './LoginForm';
import { vi } from 'vitest';


// Mockear useNavigate
vi.mock('react-router-dom', () =>{
    return{useNavigate: vi.fn()}
})  

describe("LoginForm", () =>{
    // Testea que se muestre un mensaje de error cuando se envía un correo inválido
    it("Email invalid", async () => {
        const { getByPlaceholderText, getByText} = render(<LoginForm />);
    
        fireEvent.change(getByPlaceholderText('Email'), { target: { value: 'invalidemail' } });
        fireEvent.change(getByPlaceholderText('Password'), { target: { value: 'password' } });
        fireEvent.click(getByText('Submit'));
    
        await waitFor(() => expect(getByText('Invalid email')).toBeInTheDocument());
    });

    // Testea que se muestre un mensaje de error cuando se envía una contrasedña inválido
    it("password invalid", async () => {
        const { getByPlaceholderText, getByText } = render(<LoginForm />);
    
        fireEvent.change(getByPlaceholderText('Email'), { target: { value: 'test@test.com' } });
        fireEvent.change(getByPlaceholderText('Password'), { target: { value: '' } });
        fireEvent.click(getByText('Submit'));
    
        await waitFor(() => expect(getByText('Password required')).toBeInTheDocument());
    });

    // Debe renderizar el formulario
    it("should render the form", () => {
        render(<LoginForm />);
        const emailInput = screen.getByPlaceholderText('Email');
        const passwordInput = screen.getByPlaceholderText('Password');
        const submitButton = screen.getByText('Submit');        
        expect(emailInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();
    }); 

    // Testea que el input de password tenga atributos
    it("test password input attributes", () => {
        const { getByPlaceholderText } = render(<LoginForm />);
        const passwordInput = getByPlaceholderText('Password');

        expect(passwordInput).toHaveAttribute('type', 'password');
        expect(passwordInput).toHaveAttribute('id', 'password');
        expect(passwordInput).toHaveAttribute('placeholder', 'Password');
    });    
})





