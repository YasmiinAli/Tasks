import React, { useEffect, useState } from 'react'
import listofAllTasks from '../../data'
import TaskCard from '../TaskCard/TaskCard';

function Tasks() {
  let [tasks,setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem('tasks')) || listofAllTasks
  });

 

  useEffect(()=>{
    localStorage.setItem('tasks', JSON.stringify(tasks))
  },[tasks])
  
  // add function 
  const addTask = (description, status) =>{
    let newTask ={id:tasks.length+1, description, status}
    setTasks([...tasks, newTask]);
  }

  const handleAddSubmit = (e) => {
    e.preventDefault();
    addTask(e.target.description.value, e.target.selectStatus.value);
  }// end of add
  // delet function
  const handleDelete = (id) => {
    tasks = tasks.filter((task) => task.id !== id)
    // console.log(tasks);
    setTasks(tasks)
  }//end of delete
  // update function
  const handleUpdate = (updatedTask) => {
    const updatedTasks = tasks.map(task =>
            task.id === updatedTask.id ? updatedTask : task
        );
        setTasks(updatedTasks);
  };//end



  return (
    <>
    <div className="container mt-5">
      <div className="row">
        <h4 className='text-primary col-md-12 mb-3'>Tasks</h4>
<div
          className="mb-3 mt-3 cursor-pointer"
          data-bs-toggle="modal"
          data-bs-target="#addTask"
        >
          <span className="bg-primary text-white p-2 rounded  ">Add Task</span>
        </div>        {
          tasks.length > 0 ?
          <>
          {
            tasks.map((task,index) =>
              <div key={index} className='col-md-6 mb-2'>
                <TaskCard task={task} handleDelete={handleDelete}  handleUpdate={handleUpdate} />
              </div>
            )
          }
          </> :'There no tasks to show...' 
        }
      </div>
    </div>

            {/* modal to add new task */}
        <div
          className="modal fade"
          id="addTask"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Task details
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleAddSubmit}>
  
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Details</label>
    <input type="text" className="form-control" id="description" required/>
  </div>
  <div className="mb-3">
    <select className="form-select" id="selectStatus" required>
  <option value="Not Started">Not Started</option>
  <option value="In progress">In progress</option>
  <option value="Finished">Finished</option>
</select>
  </div>
  <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" >
                  Add task
                </button>
</form>
              </div>
              
            </div>
          </div>
        </div>



    </>
  )
}

export default Tasks