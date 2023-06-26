

// Función para cambiar status de la orden
const handleChangeStatus = (order, status, token) => {
    let updateOrderData = {}
    if(status ===  'delivering'){
        updateOrderData ={
            status: status,
            deliveryDate: new Date(Date.now()).toLocaleTimeString()
        } 
    } else{
        updateOrderData = {
            status: status
        }
    }

  fetch(`http://localhost:8080/orders/${order.id}`,{
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      // Se envía token de autorización
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(updateOrderData)
  })
}

export default handleChangeStatus;