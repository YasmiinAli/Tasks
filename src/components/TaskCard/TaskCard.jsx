import React from 'react'

export default function TaskCard({task, handleDelete, handleEdit}) {
    // console.log(task);
  return (
    <div >
        <div className={`card  ${task.status ==='Not Started' ? 'bg-warning': 
        task.status ==='In progress' ?'bg-primary':'bg-success'}  
        `} >
  <div className="card-body">
    <h5 className="card-title"> status: {task.status}</h5>
    <p className="card-text">{task.description}</p>
    <div className='mx-0'>
        <i className="fa-solid fa-pen-to-square m-1 text-info cursor-pointer" onClick={()=>handleEdit()}></i>
        <i className="fa-solid fa-trash text-danger cursor-pointer" onClick={()=>handleDelete(task.id)} ></i>
    </div>
  </div>
</div>

    </div>
  )
}
