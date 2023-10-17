import React from 'react'

export default function TaskCard({task}) {
    console.log(task);
  return (
    <div >
        <div className="card " >
  <div className="card-body">
    <h5 className="card-title"> status:{task.status}</h5>
    <p className="card-text">{task.description}</p>
    <div className='mx-0'>
        <i className="fa-solid fa-pen-to-square m-1 text-info cursor-pointer"></i>
        <i className="fa-solid fa-trash text-danger cursor-pointer"></i>
    </div>
  </div>
</div>
    </div>
  )
}
