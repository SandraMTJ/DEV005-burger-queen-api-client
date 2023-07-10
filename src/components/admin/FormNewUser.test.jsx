import FormNewUser from "./FormNewUser";
import { fireEvent, render, screen} from "@testing-library/react";
import { vi } from 'vitest';


describe("FormNewUser", () => {
       
    // Tests that the form renders without errors
    it('test_form_renders_without_errors', () => {
        render(<FormNewUser />);
        const section = screen.getByRole('heading', { name: /New employee/i });
        const form = section.querySelector('form');
        expect(form).toBeDefined();
    });

        // Tests that the close button closes the form
        it('test_close_button_closes_the_form', () => {
            const setShowFormUser = vi.fn();
            render(<FormNewUser setShowFormUser={setShowFormUser} />);
            const closeButton = screen.getByTestId('close-icon');
            fireEvent.click(closeButton);
            expect(setShowFormUser).toHaveBeenCalledWith(false);
        });
})