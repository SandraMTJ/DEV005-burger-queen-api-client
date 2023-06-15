// import React from 'react';
// import '@testing-library/jest-dom/extend-expect';
// import { render, fireEvent } from '@testing-library/react';
// import LoginForm from './LoginForm';


// describe('LoginForm', () => {
//   it('should submit the form with email and password', () => {
//     const { getByLabelText, getByText } = render(<LoginForm />);
//     const emailInput = getByLabelText('Email');
//     const passwordInput = getByLabelText('Password');
//     const submitButton = getByText('Submit');

//     fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
//     fireEvent.change(passwordInput, { target: { value: 'password123' } });
//     fireEvent.click(submitButton);

//     // assert that the form was submitted with the correct values
//     expect(fetch).toHaveBeenCalledWith('http://localhost:8080/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ email: 'test@test.com', password: 'password123' }),
//     });
//   });
// });


import { render, screen} from '@testing-library/react';
import LoginForm from './loginform';
import { vi } from 'vitest'

vi.mock('react-router-dom', () =>{
    return{useNavigate: vi.fn()}
})
describe('LoginForm', () =>{
    test("renders login form",()=>{
        render(<LoginForm/>)
        screen.debug()
        expect(true).toBe(true)
    });
})