import PropTypes from 'prop-types';
const ClientName = (props) => {

  // Cuando el input del nombre del cliente, detecte un cambio, lo almacena con setClientName y no muestra error
  const handleInputChange = (event) => {
    props.setClientName(event.target.value);
    props.setClientNameError("");
  };

  return (
    <div className="container-name">
        <label className="name-client-label" htmlFor="name-client">Client:</label>
        <input type="text" className="name-client-input" id="name-client" placeholder="Client's name" onChange={handleInputChange}>
        </input>  
        <span className="client-name-error">{props.clientNameError}</span>   
    </div>
  );
};

export default ClientName;

ClientName.propTypes = {
  setClientName: PropTypes.func,  
  setClientNameError: PropTypes.func, 
  clientNameError: PropTypes.string, 
};
