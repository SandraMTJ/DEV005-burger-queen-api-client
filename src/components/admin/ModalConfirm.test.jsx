import ModalConfirm from "./ModalConfirm";
import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from 'vitest';

describe("ModalConfirm", () => {

    // Tests that ModalConfirm displays the correct name of the item to be deleted
    it('displays correct name', () => {
        const selectedItem = {
            id: 1,
            name: 'Test Product',
            email: 'test@example.com'
        };
        render(<ModalConfirm type='products' selectedItem={selectedItem} />);
        expect(screen.getByText('Test Product')).toBeInTheDocument();
    });
    // Tests that ModalConfirm calls setShowModalConfirm(false) when cancel button is clicked
    it('calls setShowModalConfirm(false) on cancel button click', () => {
        const setShowModalConfirm = vi.fn();
        const selectedItem = {
            id: 1,
            name: 'Test Product',
            email: 'test@example.com'
        };
        const { getByTestId } = render(<ModalConfirm selectedItem={selectedItem} setShowModalConfirm={setShowModalConfirm} />);
        fireEvent.click(getByTestId('cancel-button'));
        expect(setShowModalConfirm).toHaveBeenCalledWith(false);
    });

   // Tests that ModalConfirm calls onDelete() function when confirm button is clicked
   it('calls onDelete() on confirm button click', () => {
    const selectedItem = {
        id: 1,
        name: 'Test Product',
        email: 'test@example.com'
    };
    const onDelete = vi.fn();
    const { getByTestId } = render(<ModalConfirm selectedItem={selectedItem} onDelete={onDelete} />);
    fireEvent.click(getByTestId('confirm-button'));
    expect(onDelete).toHaveBeenCalled();
});
});

    
