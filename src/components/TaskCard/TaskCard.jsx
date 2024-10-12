import React, {useEffect, useState} from 'react'

function TaskCard({task, handleDelete, handleUpdate}) {
    let [description, setDesc] = useState(task.description);
    let [status, setStatus] = useState(task.status);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
    if (task) {
      setDesc(task.description);
      setStatus(task.status)
    }
  }, [task]);

    const handleShow = () => {
    setShowModal(true);
    setDesc(task.description); 
    setStatus(task.status)
  };

  const handleClose = () => setShowModal(false);

  const handleSave = () => {
    const updatedTask = { ...task, description, status };
    handleUpdate(updatedTask);
    handleClose(); 
  };

  
  return (
    <>
    <div className={` card h-100  ${task.status ==='Not Started' ? 'bg-warning': 
        task.status ==='In progress' ?'bg-primary':'bg-success'}  
        `} >
  <div className="card-body">
    <h5 className="card-title"> status: {task.status}</h5>
    <p className="card-text">{task.description}</p>
    <div className='mx-0'>
        <i className="fa-solid fa-pen-to-square  me-2 text-info cursor-pointer" data-bs-toggle="modal"
          data-bs-target="#editTask" onClick={handleShow}></i>
        <i className="fa-solid fa-trash text-danger cursor-pointer" onClick={()=>handleDelete(task.id)} ></i>
    </div>
  </div>
</div>

         {/* modal to edit task */}
        <div
          className= {`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }}  role="dialog" aria-hidden={!showModal}
          id="editTask"
          tabIndex="-1"          
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Edit Task details
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close" onClick={handleClose}
                ></button>
              </div>
              <div className="modal-body">
                <form >
  
  <div className="mb-3">
    <label htmlFor="updatedescription" className="form-label">Details</label>
    <input type="text" className="form-control" id="updatedescription" value={description} onChange={(e)=>setDesc(e.target.value)}
    />
  </div>
  <div className="mb-3">
    <select className="form-select" id="updateStatus" value={status} onChange={(e)=>setStatus(e.target.value)}>
  <option value="Not Started">Not Started</option>
  <option value="In progress">In progress</option>
  <option value="Finished">Finished</option>
</select>
  </div>
  <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleSave}>
                  Save changes 
                </button>
</form>
              </div>
              
            </div>
          </div>
        </div>
    </>
  )
}

export default TaskCard