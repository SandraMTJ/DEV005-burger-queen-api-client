import PropTypes from 'prop-types';
const StatusOrderChef = (props) => {
   
    return (
      <div className="container-status-chef">
        <label className="name-client-label">Status: </label>
        <div className="container-btns-chef">
            <button
             className={`btn-pending ${props.selectedOrderStatusChef === 'pending' ? 'selected' : ''} `}
             onClick={() => props.setSelectedOrderStatusChef('pending')}>
                Pending
            </button>
            <button
             className={`btn-delivering ${props.selectedOrderStatusChef === 'delivering' ? 'selected' : ''}`}
             onClick={() => props.setSelectedOrderStatusChef('delivering')}>
                Ready to deliver
            </button>
        </div>
      </div>
    );
  };

export default StatusOrderChef;


StatusOrderChef.propTypes = {
  selectedOrderStatusChef: PropTypes.string,
  setSelectedOrderStatusChef: PropTypes.func,
};
