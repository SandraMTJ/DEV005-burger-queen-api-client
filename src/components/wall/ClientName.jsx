const ClientName = ({setClientName, clientNameError, setClientNameError}) => {

    const handleInputChange = (event) => {
        setClientName(event.target.value);
        setClientNameError("");
      };

    return (
            <div className="container-name">
                <label className="name-client-label" htmlFor="name-client">Client:</label>
                   <input type="text" className="name-client-input" id="name-client" placeholder="Client's name" onChange={handleInputChange}>
                   </input>  
                   <span className="client-name-error">{clientNameError}</span>   
            </div>
    );
};

export default ClientName;