import PropTypes from 'prop-types';
const OptionsAdmin = (props) => {
   
    return (
      <div className="container-options-chef">
        <div className="container-btns-chef">
            <button
             className={`btn-pending ${props.selectedOptionsAdmin === 'employees' ? 'selected' : ''} `}
             onClick={() => props.setSelectedOptionsAdmin('employees')}>
                Employees
            </button>
            <button
             className={`btn-delivering ${props.selectedOptionsAdmin === 'products' ? 'selected' : ''}`}
             onClick={() => props.setSelectedOptionsAdmin('products')}>
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
};
