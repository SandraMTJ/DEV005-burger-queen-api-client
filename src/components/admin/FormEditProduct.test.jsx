import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import FormEditProduct from './FormEditProduct';
import { vi } from 'vitest';
import fetchMock from 'fetch-mock';
describe('FormEditProduct', () => {
    // Test para ver si el formulario renderiza
    it('test render form', () => {
        const props = {
            selectedProductEdit: {
                id: 1,
                name: 'Test Product',
                type: 'breakfast',
                price: 10,
                image: 'https://test.com/image.jpg'
            },
            setShowFormEditProduct: vi.fn()
        }
        render(<FormEditProduct {...props} />);
        expect(screen.getByText('Edit product')).toBeInTheDocument();
    });
    // Testea que si se muestren lo valores predeterminados correctamente
    it('test display default values', () => {
        const props = {
            selectedProductEdit: {
                id: 1,
                name: 'Test Product',
                type: 'breakfast',
                price: 10,
                image: 'https://test.com/image.jpg'
            },
            setShowFormEditProduct: vi.fn()
        }
        render(<FormEditProduct {...props} />);
        expect(screen.getByDisplayValue('Test Product')).toBeInTheDocument();
        expect(screen.getByDisplayValue('10')).toBeInTheDocument();
        expect(screen.getByDisplayValue('https://test.com/image.jpg')).toBeInTheDocument();
    });
    // Testea que el formulario no se envíe con datos inválidos
    it('test_submit_invalid_inputs', async () => {
        const props = {
            selectedProductEdit: {
                id: 1,
                name: 'Test Product',
                type: 'breakfast',
                price: 10,
                image: 'https://test.com/image.jpg'
            },
            setShowFormEditProduct: vi.fn()
        }
        render(<FormEditProduct {...props} />);
        fireEvent.change(screen.getByPlaceholderText('Name'), { target: { value: '' } });
        fireEvent.change(screen.getByRole('combobox'), { target: { value: '' } });
        fireEvent.change(screen.getByPlaceholderText('Price'), { target: { value: '' } });
        fireEvent.change(screen.getByPlaceholderText('Image URL'), { target: { value: '' } });
        fireEvent.submit(screen.getByRole('button', { name: 'Save' }));
        await waitFor(() => expect(props.setShowFormEditProduct).toHaveBeenCalledTimes(0));
    });
    // Testea que el formulario se cierre
    it('test close form', () => {
        const props = {
          selectedProductEdit: {
            id: 1,
            name: 'Test Product',
            type: 'breakfast',
            price: 10,
            image: 'https://test.com/image.jpg'
          },
          setShowFormEditProduct: vi.fn()
        };
        render(<FormEditProduct {...props} />);
        fireEvent.click(screen.getByTestId('close-icon')); // Reemplaza 'close-icon' con el valor correcto del atributo data-testid en el ícono
        expect(props.setShowFormEditProduct).toHaveBeenCalledTimes(1);
    });
  afterEach(() => {
    fetchMock.restore();
  });
  it('submits the form and closes the form', async () => {
    const props = {
      selectedProductEdit: {
        id: 1,
        name: 'Test Product',
        type: 'breakfast',
        price: 10,
        image: 'https://test.com/image.jpg',
      },
      setShowFormEditProduct: vi.fn(),
    };
    // Mock la llamada a la API
    fetchMock.patch(`http://localhost:8080/products/${props.selectedProductEdit.id}`, 200);
    render(<FormEditProduct {...props} />);
    fireEvent.submit(screen.getByRole('button', { name: 'Save' }));
    // Espera a que la llamada a la API se complete
    await waitFor(() => expect(fetchMock.called()).toBeTruthy());
    // Verifica que se haya llamado a la función setShowFormEditProduct
    expect(props.setShowFormEditProduct).toHaveBeenCalledTimes(1);
  });
})