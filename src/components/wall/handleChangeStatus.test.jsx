import handleChangeStatus from "./handleChangeStatus";
import { vi } from 'vitest';

describe('handleChangeStatus', () => {
    // Testea que el status de la orden sea actualizado correctamente cuando el status es "delivering"
    it('test happy path delivering', async () => {
        const order = { id: 1 };
        const status = 'delivering';
        const token = 'token';
        const fetchMock = vi.fn();
        window.fetch = fetchMock;
        await handleChangeStatus(order, status, token);
        expect(fetchMock).toHaveBeenCalledWith('http://localhost:8080/orders/1', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                status: status,
                deliveryDate: new Date(Date.now()).toLocaleTimeString()
            })
        });
    });

    // Testea que el status de la orden sea actualizado correctamente cuando el status no es "delivering"
    it('test_happy_path_not_delivering', async () => {
        const order = { id: 1 };
        const status = 'not delivering';
        const token = 'token';
        const fetchMock = vi.fn();
        window.fetch = fetchMock;
        await handleChangeStatus(order, status, token);
        expect(fetchMock).toHaveBeenCalledWith('http://localhost:8080/orders/1', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                status: status
            })
        });
    });
})
    