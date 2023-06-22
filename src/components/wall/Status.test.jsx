import { vi } from 'vitest';
import { waitFor, render } from '@testing-library/react';
import Status from './Status';
import { act } from 'react-dom/test-utils';

describe("Status component", () => {
  it("test render component", () => {
    const setShowStatus = vi.fn();
    const { container } = render(<Status setShowStatus={setShowStatus} />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("test empty orders array", async () => {
    const orders = [];
    const token = 'token';
    const localStorageMock = {
      getItem: vi.fn(() => token),
    };
    const fetchMock = vi.fn(() => Promise.resolve({ json: () => Promise.resolve(orders) }));
    const setShowStatus = vi.fn();
    
    Object.defineProperty(window, 'localStorage', { value: localStorageMock });
    window.fetch = fetchMock;
    
    let wrapper;
    
    await waitFor(() => {
      wrapper = render(<Status setShowStatus={setShowStatus} />);
    });
    
    expect(fetchMock).toHaveBeenCalledWith('http://localhost:8080/orders', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    
    expect(wrapper.container.querySelector('.ready-to-deliver-row')).toBeNull();
    expect(wrapper.container.querySelector('.delivered-row')).toBeNull();
  });

  it("test api request fails", async () => {
    const fetchMock = vi.fn(() => Promise.reject('API is down'));
    const consoleErrorMock = vi.fn();
    const setShowStatus = vi.fn();
    
    window.fetch = fetchMock;
    console.error = consoleErrorMock;
    
    await act(async () => {
      const wrapper = render(<Status setShowStatus={setShowStatus} />);
    });
    
    expect(consoleErrorMock).toHaveBeenCalledWith('API error:', 'API is down');
  });
  
});









