import { vi } from 'vitest';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Order from './Order';

describe("Order", () => {

    // Debe renderizar el componente de Order
    it("test render component", () => {
        const props = {
        setShowOrder: vi.fn(),
        setAllProducts: vi.fn(),
        setCountProducts: vi.fn(),
        setTotal: vi.fn(),
        allProducts: [],
        countProducts: 0,
        total: 0,
        clientName: 'Fake',
        showModalOrder: false,
        };
    
        const container = document.createElement('div');
        act(() => {
        render(<Order {...props} />, container);
        });
    
        expect(container.querySelector('.order-component')).toBeDefined();
    });  

    // Debe mostrar el nombre del cliente
    it("should display client name", () => {
        const props = {
            setShowOrder: vi.fn(),
            setAllProducts: vi.fn(),
            setCountProducts: vi.fn(),
            setTotal: vi.fn(),
            allProducts: [],
            countProducts: 0,
            total: 0,
            clientName: 'Fake',
            showModalOrder: false,
        };

        const container = document.createElement('div');
        render(<Order {...props} />, container);

        const nameClientOrder = container.querySelector('.name-client-order');
        expect(nameClientOrder.textContent).toEqual('Client: Fake');
    });

    // Debe aumentar la cantidad del producto
    it("should increase product quantity", () => {
        const setAllProductsMock = vi.fn();
        const setCountProductsMock = vi.fn();
        const setTotalMock = vi.fn();

        const props = {
            setShowOrder: vi.fn(),
            setAllProducts: setAllProductsMock,
            setCountProducts: setCountProductsMock,
            setTotal: setTotalMock,
            allProducts: [{ id: 1, name: 'Product 1', qty: 1, price: 10 }],
            countProducts: 1,
            total: 10,
            clientName: 'Fake',
            showModalOrder: false,
        };

        const container = document.createElement('div');
        act(() => {
            render(<Order {...props} />, container);
        });

        const plusIcon = container.querySelector('.plus-icon');
        act(() => {
            plusIcon.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        });
        
        expect(setCountProductsMock).toHaveBeenCalledWith(2);
        expect(setTotalMock).toHaveBeenCalledWith(20);
    });


    // Debe disminuir la cantidad del producto
    it("should decrease product quantity", () => {
        const setAllProductsMock = vi.fn();
        const setCountProductsMock = vi.fn();
        const setTotalMock = vi.fn();

        const props = {
            setShowOrder: vi.fn(),
            setAllProducts: setAllProductsMock,
            setCountProducts: setCountProductsMock,
            setTotal: setTotalMock,
            allProducts: [{ id: 1, name: 'Product 1', qty: 2, price: 10 }],
            countProducts: 2,
            total: 20,
            clientName: 'Fake',
            showModalOrder: false,
        };

        const container = document.createElement('div');
        act(() => {
            render(<Order {...props} />, container);
        });

        const minusIcon = container.querySelector('.minus-icon');
        act(() => {
            minusIcon.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        });
    
        expect(setCountProductsMock).toHaveBeenCalledWith(1);
        expect(setTotalMock).toHaveBeenCalledWith(10);
    });

    // Debe eliminar producto de la orden
    it("should delete product from order", () => {
        const setAllProductsMock = vi.fn();
        const setCountProductsMock = vi.fn();
        const setTotalMock = vi.fn();

        const props = {
            setShowOrder: vi.fn(),
            setAllProducts: setAllProductsMock,
            setCountProducts: setCountProductsMock,
            setTotal: setTotalMock,
            allProducts: [{ id: 1, name: 'Product 1', qty: 2, price: 10 }],
            countProducts: 2,
            total: 20,
            clientName: 'Fake',
            showModalOrder: false,
        };

        const container = document.createElement('div');
        act(() => {
            render(<Order {...props} />, container);
        });

        const deleteIcon = container.querySelector('.delete-icon');
        act(() => {
            deleteIcon.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        });

        expect(setAllProductsMock).toHaveBeenCalledWith([]);
        expect(setCountProductsMock).toHaveBeenCalledWith(0);
        expect(setTotalMock).toHaveBeenCalledWith(0);
    });

    // Debe tener solo un elemento (mensaje de 'add products') cuando la lista de productos es vacía
    it("test handle empty product list", () => {
        const setAllProductsMock = vi.fn();
        const setCountProductsMock = vi.fn();
        const setTotalMock = vi.fn();

        const props = {
            setShowOrder: vi.fn(),
            setAllProducts: setAllProductsMock,
            setCountProducts: setCountProductsMock,
            setTotal: setTotalMock,
            allProducts: [],
            countProducts: 0,
            total: 0,
            clientName: 'Fake',
            showModalOrder: false,
        };

        const container = document.createElement('div');
        act(() => {
            render(<Order {...props} />, container);
        });

        const contentOrdersTable = container.querySelector('.content-orders-table');

        expect(contentOrdersTable.children.length).toEqual(1);
    });
})



