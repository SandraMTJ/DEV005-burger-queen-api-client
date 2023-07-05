import PropTypes from 'prop-types';
const OptionsAdmin = (props) => {
   
    return (
      <div className="container-options-admin">
        <div className="container-btns-admin">
          {/* Cuando botón se seleccione se agrega clase selected para que cambie de color a amarillo */}
            <button
             className={`btn-employee ${props.selectedOptionsAdmin === 'employees' ? 'selected' : ''} `}
             onClick={() => {
                              props.setSelectedOptionsAdmin('employees');
                              props.setOptionCreate('employee')
                            }}>
                Employees
            </button>
            <button
             className={`btn-product ${props.selectedOptionsAdmin === 'products' ? 'selected' : ''}`}
             onClick={() => {
                              props.setSelectedOptionsAdmin('products'); 
                              props.setOptionCreate('product')
                            }}>
                Products
            </button>
        </div>
      </div>
    );
  };

export default OptionsAdmin;


OptionsAdmin.propTypes = {
  selectedOptionsAdmin: PropTypes.string,
  setSelectedOptionsAdmin: PropTypes.func,
  setOptionCreate: PropTypes.func,
};
