
const BtnCreateElement = (props) => {

    return (
        <div className="container-btn-option-create">
            <button className="btn-option-create" >
            Create  {props.optionCreate}           
            </button>
        </div>
    );
};

export default BtnCreateElement;