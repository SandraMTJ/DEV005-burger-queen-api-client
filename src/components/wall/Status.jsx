import { CgClose } from 'react-icons/cg';
const Status = (props) => { 

    const handleClick = () => {
        props.setShowStatus(false)
    }

  return (  
    <>      
      <CgClose className="icon-close-status" onClick = {handleClick}/> 
      <section className="section-status">
        <h1 className="status-title">Status</h1>
        <table className="status-title-table">
          <thead className="titles-status-table">                    
              <tr>
                  <th className='status-celd1' scope="col">Ready to deliver</th>
                  <th className='status-celd2' scope="col">Delivered</th>         
              </tr>                   
            </thead>
        </table>
        <div className="status-container">         
          <table className="status-content-table">
            <thead className="content-status-table">       
                <tr>
                  <th className='status-celd4' scope="col">prueba</th>
                  <th className='status-celd5' scope="col">prueba2</th>  
                </tr>                                                
            </thead>
          </table>
        </div>
      </section>
    </>
  );
};
export default Status;