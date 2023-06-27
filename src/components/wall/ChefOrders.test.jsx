import { render, fireEvent, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import ChefOrders from './ChefOrders';

describe('ChefOrders', () => {
  it('test_no_orders_message_when_ordersChef_is_empty', async () => {
    const mockOrders = [];
    const mockResponse = {json: vi.fn().mockResolvedValue(mockOrders)};
    vi.spyOn(window, 'fetch').mockResolvedValue(mockResponse);
    localStorage.setItem('token', 'mockToken');
    const {findByText} = render(<ChefOrders selectedOrderStatusChef='pending' />);
    const noOrdersMessage = await findByText('No orders');
    expect(noOrdersMessage).toBeInTheDocument();
});
});
