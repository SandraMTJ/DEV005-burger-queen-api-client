import { vi } from 'vitest';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Order from './Order';

describe("Order", () => {

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

    it("test_display_client_name", () => {
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

    it("test increase product quantity", () => {
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


    // Tests that the quantity of a product can be decreased
    it("test decrease product quantity", () => {
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

    it("test delete product from order", () => {
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



