const ClientName = (props) => {

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