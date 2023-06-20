const ClientName = ({setClientName}) => {

    const handleInputChange = (event) => {
        setClientName(event.target.value);
      };


    return (
            <div className="container-name">
                <label className="name-client-label" htmlFor="name-client">Client:</label>
                   <input type="text" className="name-client-input" id="name-client" placeholder="Client's name" onChange={handleInputChange}>
                   </input>      
            </div>
    );
};

export default ClientName;