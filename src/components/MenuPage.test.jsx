import { render, screen, fireEvent } from '@testing-library/react';
import MenuPage from './MenuPage';
import ProductContainer from './MenuPage';
import ClientName from './wall/ClientName';
import { vi } from 'vitest';


describe('MenuPage', () => {

  const mockProducts = [
      {
        id: 1,
        name: 'Product 1',
        image: 'image1.jpg',
        price: 10,
        type: 'breakfast'
      },
      {
        id: 2,
        name: 'Product 2',
        image: 'image2.jpg',
        price: 20,
        type: 'lunch'
      }
    ];
  // Verifica si el componente "MenuPage" renderiza correctamente el texto Category
  it('Category rendering test', () => {
    render(<MenuPage />);
    expect(screen.getByText('Category:')).toBeInTheDocument();
  });

  // Prueba renderizado de ClientName
  it('Test that the ClientName component is rendered', () => {
    render(<MenuPage />);
    expect(screen.getByText('Client:')).toBeInTheDocument();
  });

  // Prueba que componente ProductContainer es renderizado
  it('ProductContainer rendered', () => {
    render(<MenuPage />);
    expect(screen.getByText('Breakfast')).toBeInTheDocument();
  });

  // Prueba que el estado del menú seleccionado se establece cuando se llama a handleMenuSelect
  it('Test menu selection according to call of handleMenuSelect', () => {
    const { getByText } = render(<MenuPage />);
    fireEvent.click(getByText('Lunch - Dinner'));
    expect(getByText('Lunch - Dinner')).toHaveClass('selected');
  });

  // El componente de modal no se muestra si showModalOrder es 'false'
  it('Modal is not displayed if showModalOrder is false', () => {
    render(<MenuPage showModalOrder={false} />);
    expect(screen.queryByText('Order sent successfully!')).not.toBeInTheDocument();
  });

  // El componente de modal si se muestra si showModalOrder es 'true'
  it('Modal is displayed if showModalOrder is true', () => {
    render(<MenuPage showModalOrder={true} setShowModalOrder={vi.fn()} />);
    expect(screen.getByText('Order sent successfully!')).toBeInTheDocument();
  });

  // Prueba que la propiedad setClientName se pasa al componente ClientName
  it('setClientName prop to ClientName component', () => {
    const setClientName = vi.fn();
    const clientNameError = '';
    const setClientNameError = vi.fn();
    const { getByLabelText } = render(<ClientName setClientName={setClientName} clientNameError={clientNameError} setClientNameError={setClientNameError} />);
    const input = getByLabelText('Client:');
    fireEvent.change(input, { target: { value: 'John Doe' } });
    expect(setClientName).toHaveBeenCalledWith('John Doe');
  });

  // Verifica si la propiedad selectedMenu se pasa correctamente al componente ProductContainer
  it('selectedMenu state to ProductContainer component', () => {
    const selectedMenu = 'breakfast';
    const setAllProducts = vi.fn();
    const allProducts = [];
    const total = 0;
    const setTotal = vi.fn();
    const countProducts = 0;
    const setCountProducts = vi.fn();
  
    vi.spyOn(window, 'fetch').mockReturnValue(
        Promise.resolve({
          json: () => Promise.resolve(mockProducts)
        })
      );      
  
    render(<ProductContainer 
      selectedMenu={selectedMenu} 
      setAllProducts={setAllProducts} 
      allProducts={allProducts} 
      total={total} 
      setTotal={setTotal} 
      countProducts={countProducts} 
      setCountProducts={setCountProducts} />);
    
    expect(window.fetch).toHaveBeenCalledWith('http://localhost:8080/products', {
      headers: {
        'Authorization': 'Bearer null',
      },
    });
  });      
});
