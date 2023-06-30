
const BtnCreateElement = (props) => {
    const handleClick = () => {
        if(props.optionCreate === 'employee'){
            props.setShowFormUser(true)
        }       
    }
    return (
        <div className="container-btn-option-create">
            <button className="btn-option-create" onClick = {handleClick}  >
                Create {props.optionCreate}                     
            </button>
        </div>
    );
};

export default BtnCreateElement;