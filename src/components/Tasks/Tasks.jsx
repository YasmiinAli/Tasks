import React, { useState } from 'react'
import TaskCard from '../TaskCard/TaskCard'

export default function Tasks() {
    let listofAllTasks =[
        {id:1,
            description :'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.',
        status:'Finished'
    },
    {id:2,
        description :'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.',
        status:'Not Started'
    },
    {id:3,
        description :'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.',
        status:'In progress'
    },
    {id:4,
        description :'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.',
        status:'Finished'
    },
{id:5,
    description :'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.',
        status:'In progress'
    },
    {id:6,
        description :'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.',
        status:'In progress'
    },
    {id:7,
        description :'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.',
        status:'Not Started'
    },
    {id:8,
        description :'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.',
        status:'Not Started'
    },
    {id:9,
        description :'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.',
        status:'Finished'
    },
    {id:10,
        description :'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.',
        status:'Not Started'
    },
    {id:11,
        description :'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.',
        status:'In progress'
    },
    {id:12,
        description :'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.',
        status:'Not Started'
    },
    {id:13,
        description :'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.',
        status:'Finished'
    },
    ]
        let [listofTasks,setListOfTasks] = useState(listofAllTasks)

    const handleDelete = (id) => {
        listofTasks=listofTasks.filter((task)=> task.id !== id)
        setListOfTasks(listofTasks)
        // console.log( id ,'deleted')
    }
    const handleEdit = () => {

    }
    console.log(listofTasks);
  return (
        <div className="container m-5">
        <div className="row">
            <h2 className='text-info'>Tasks</h2>
           { listofTasks?.map((task,index) =>
            (<>
            <div className='col-md-6 mb-2' key={index}>
<TaskCard task ={task} handleDelete={handleDelete}  handleEdit={handleEdit} />
            </div>
            </>))}
                



        </div>
    </div>
  )
}
