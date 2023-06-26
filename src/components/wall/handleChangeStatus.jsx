// Llamar al token almacenado
const token = localStorage.getItem('token');

// Función para cambiar status de la orden
const handleChangeStatus = (order, status) => {
  fetch(`http://localhost:8080/orders/${order.id}`,{
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      // Se envía token de autorización
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({status: status})
  })
}

export default handleChangeStatus;