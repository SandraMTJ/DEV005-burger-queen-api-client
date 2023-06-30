import { CgClose } from 'react-icons/cg';

const ModalConfirm = (props) => {
    console.log(props.product)
    // Llamar al token almacenado
    const token = localStorage.getItem('token');

    // Función que maneja el cambio de estado se showModalOrder, para que no se muestre el modal
    const handleClick = () =>{

        props.setShowModalConfirm(false)
    }

    const onDelete = () => {
        // Solicitud a la API para modificar la información de la orden
        fetch(`http://localhost:8080/products/${props.product.id}`,{
            method: 'DELETE',
            headers: {
            // Se envía token de autorización
            'Authorization': `Bearer ${token}`,
            }
        })
        .then(()=> props.setShowModalConfirm(false))
        .catch((err) => console.log(err))
    }

    return (
        <div className="background-modal">
            <div className="modal-order">
                <span> Are you sure you want to delete? </span>
                <div className='icons-modal-order'>
                    <button className="btn-cancel" onClick={handleClick}>Cancel</button>
                    <button className = "btn-confirm"  onClick={() => onDelete()} >Confirm</button>
                </div>
            </div>
        </div>
    );
};

export default ModalConfirm;


