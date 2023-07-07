import { render, fireEvent} from '@testing-library/react';
import { vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import AdminView from './AdminView';
import LogoWall from '../wall/LogoWall';
import OptionsAdmin from './OptionsAdmin';
import BtnCreateElement from './BtnCreateElement';
import ListEmployees from './ListEmployees';
import ListProducts from './ListProducts';

describe("AdminView", () => {

  // Muestra AdminView sin fallas  
  it('renders AdminView without crashing', () => {
    render(
      <BrowserRouter>
        <AdminView />
      </BrowserRouter>
    );
    });

    // Prueba que se muestre componente LogoWall sin fallas
    it('renders LogoWall component without crashing', () => {
        render(<LogoWall />);
    });

    // Prueba que se muestre componente OptionsAdmin sin fallas
    it('renders OptionsAdmin component without crashing', () => {
        render(<OptionsAdmin selectedOptionsAdmin='' setSelectedOptionsAdmin={() => {}} setOptionCreate={() => {}} />);
    });

    // Prueba que se muestre componente BtnCreateElement sin fallas
    it('renders BtnCreateElement component without crashing', () => {
        render(<BtnCreateElement optionCreate ='' setShowFormUser={() => {}} setShowFormProduct={() => {}} />);
    });

    // Prueba que se muestre componente ListEmployees sin fallas
    it('renders ListEmployees component without crashing', () => {
        render(
          <ListEmployees
            role ="admin"
            setShowFormEditUser={() => {}}
            setSelectedUser={() => {}}
          />
        );
    });
      

    // Prueba que se muestre componente ListProducts sin fallas
    it('renders ListProducts component without crashing', () => {
        render(
          <ListProducts
            type="breakfast"
            setShowFormEditProduct={() => {}}
            setSelectedProductEdit={() => {}}
          />
        );
    });

    // Prueba que al hacer click en el icono de cerrar se redirige a la vista de Wall
    it('test close icon click redirects to wall view', () => {
        const setShowAdminView = vi.fn();
        const { getByTestId } = render(
          <BrowserRouter>
            <AdminView setShowAdminView={setShowAdminView} />
          </BrowserRouter>
        );
        fireEvent.click(getByTestId('close-icon'));
        expect(setShowAdminView).toHaveBeenCalledWith(false);
    });

    // // Prueba el caso cuando la vista no tiene empleados o productos para mostrar
    it('test no employees or products to display', () => {
        const { getByText } = render(
            <BrowserRouter>
            <AdminView selectedOptionsAdmin='employees' />
            </BrowserRouter>
        );
        expect(getByText('Employees')).toBeInTheDocument();
        expect(getByText('Admins')).toBeInTheDocument();
        expect(getByText('Chefs')).toBeInTheDocument();
        expect(getByText('Waiters')).toBeInTheDocument();
    });

});
