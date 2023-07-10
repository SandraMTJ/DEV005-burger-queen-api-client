import FormEditUser from "./FormEditUser";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { vi } from 'vitest';

describe("FormEditUser", () => {

    // Comprueba que el formulario se procesa sin bloquearse
    it('test form renders', () => {
        const selectedUser = {
        role: 'admin',
        };
        render(<FormEditUser selectedUser={selectedUser} />);
    });

    // Comprueba que el formulario contiene todos los campos de entrada necesarios
    it('test form contains fields', () => {
        const selectedUser = {
            role: 'admin',
        };
        const { getByPlaceholderText, getByText } = render(<FormEditUser selectedUser={selectedUser} />);
        expect(getByPlaceholderText('Email')).toBeInTheDocument();
        expect(getByPlaceholderText('Password')).toBeInTheDocument();
        expect(getByText('Role')).toBeInTheDocument();
        expect(getByText('Admin')).toBeInTheDocument();
        expect(getByText('Waiter')).toBeInTheDocument();
        expect(getByText('Chef')).toBeInTheDocument();
    });

    // Pruebas de que el formulario se envía correctamente con una entrada válida
    it('test form submits successfully', async () => {
        const setShowFormEditUser = vi.fn(); // Función simulada
        const { getByPlaceholderText, getByText } = render(
            <FormEditUser selectedUser={{ id: 1 }} setShowFormEditUser={setShowFormEditUser} />
        );
        const emailInput = getByPlaceholderText('Email');
        const passwordInput = getByPlaceholderText('Password');
        const roleSelect = getByText('Role');
        const saveButton = getByText('Save');
    
        fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
        fireEvent.change(passwordInput, { target: { value: 'password' } });
        fireEvent.change(roleSelect, { target: { value: 'admin' } });
        fireEvent.click(saveButton);
    
        await waitFor(() => expect(setShowFormEditUser).toHaveBeenCalledWith(false));
    });

    // // Prueba de que el formulario no se envía con una entrada no válida
    it('test form does not submit invalid input', async () => {
        const setShowFormEditUser = vi.fn();
        const { getByPlaceholderText, getByText } = render(<FormEditUser selectedUser={{id: 1}} setShowFormEditUser={() => {}} />);
        const emailInput = getByPlaceholderText('Email');
        const passwordInput = getByPlaceholderText('Password');
        const roleSelect = getByText('Role');
        const saveButton = getByText('Save');

        fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
        fireEvent.change(passwordInput, { target: { value: 'pass' } });
        fireEvent.change(roleSelect, { target: { value: '' } });
        fireEvent.click(saveButton);

        await waitFor(() => expect(setShowFormEditUser).not.toHaveBeenCalled());
    });

    // Prueba que el formulario no se envía si falta el token
    it('test form does not submit missing token', async () => {
        localStorage.removeItem('token');
        const setShowFormEditUser = vi.fn();
        const { getByPlaceholderText, getByText } = render(<FormEditUser selectedUser={{id: 1}} setShowFormEditUser={() => {}} />);
        const emailInput = getByPlaceholderText('Email');
        const passwordInput = getByPlaceholderText('Password');
        const roleSelect = getByText('Role');
        const saveButton = getByText('Save');

        fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
        fireEvent.change(passwordInput, { target: { value: 'password' } });
        fireEvent.change(roleSelect, { target: { value: 'admin' } });
        fireEvent.click(saveButton);

        await waitFor(() => expect(setShowFormEditUser).not.toHaveBeenCalled());
    });

    // Prueba de que el formulario no se envía si falla la solicitud a la API
    it('test form does not submit failed fetch', async () => {
        window.fetch = vi.fn(() => Promise.reject());
        const setShowFormEditUser = vi.fn();
        const { getByPlaceholderText, getByText } = render(<FormEditUser selectedUser={{id: 1}} setShowFormEditUser={() => {}} />);
        const emailInput = getByPlaceholderText('Email');
        const passwordInput = getByPlaceholderText('Password');
        const roleSelect = getByText('Role');
        const saveButton = getByText('Save');

        fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
        fireEvent.change(passwordInput, { target: { value: 'password' } });
        fireEvent.change(roleSelect, { target: { value: 'admin' } });
        fireEvent.click(saveButton);

        await waitFor(() => expect(setShowFormEditUser).not.toHaveBeenCalled());
    });
})