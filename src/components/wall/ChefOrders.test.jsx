import { render } from "@testing-library/react";
import ChefOrders from "./ChefOrders";
import { vi } from 'vitest';

describe('ChefOrders', () => {
    // Prueba que los pedidos se obtengan correctamente desde la API y el estado se establezca correctamente
    it('test fetch orders success', async () => {
        const mockData = [
            { id: 1, client: 'Fake', products: [{ id: 1, qty: 2, name: 'Onion rings' }], status: 'pending', dateEntry: '12:00' }
        ];
        const mockResponse = { json: vi.fn().mockResolvedValue(mockData) };
        vi.spyOn(window, 'fetch').mockResolvedValue(mockResponse);
        const { container } = render(<ChefOrders selectedOrderStatusChef='pending' />);
        await new Promise(resolve => setTimeout(resolve));
        expect(container.getElementsByClassName('card-order-chef')).toHaveLength(1);
        expect(container.getElementsByClassName('client-name-chef-orders')[0].textContent).toEqual('Client: Fake');
        window.fetch.mockRestore();
    });

   // Prueba que se muestre el mensaje 'No orders' cuando no hay pedidos
   it('test no orders message displayed', async () => {
        const mockData = [];
        const mockResponse = { json: vi.fn().mockResolvedValue(mockData) };
        vi.spyOn(window, 'fetch').mockResolvedValue(mockResponse);
        const { container } = render(<ChefOrders selectedOrderStatusChef='pending' />);
        await new Promise(resolve => setTimeout(resolve));
        expect(container.getElementsByClassName('no-orders-message')).toHaveLength(1);
        window.fetch.mockRestore();
    });

    // Prueba que el error de la API se maneje correctamente
    it('test_fetch_orders_failure', async () => {
        const mockError = new Error('API error');
        vi.spyOn(window, 'fetch').mockRejectedValue(mockError);
        console.error = vi.fn();
        const { container } = render(<ChefOrders selectedOrderStatusChef='pending' />);
        await new Promise(resolve => setTimeout(resolve));
        expect(console.error).toHaveBeenCalledWith('API error:', mockError);
        vi.restoreAllMocks();
    });
});
