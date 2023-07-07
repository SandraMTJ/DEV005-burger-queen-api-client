import { render, screen} from '@testing-library/react';
import FormNewProduct from './FormNewProduct';
import fetchMock from 'fetch-mock';


describe('FormNewProduct', () => {

  it('renders the form without crashing', () => {
    const { getByTestId } = render(<FormNewProduct />);
    const formElement = getByTestId('form-new-product');
    expect(formElement).toBeInTheDocument();
  });

  it('contains all necessary input fields', () => {
    render(<FormNewProduct />);
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Price')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Image URL')).toBeInTheDocument();
  });
  afterEach(() => {
    fetchMock.restore();
  });

  it('test_form_renders_without_errors', () => {
    render(<FormNewProduct />);
    const section = screen.getByRole('heading', { name: /New product/i });
    const form = section.querySelector('form');
    expect(form).toBeDefined();
  });
});