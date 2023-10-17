import React from 'react'
import TaskCard from '../TaskCard/TaskCard'

export default function Tasks() {
    const listofTasks =[
        {description :'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.',
        status:'Finished'
    },
    {description :'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.',
        status:'Not Started'
    },
    {description :'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.',
        status:'In progress'
    },
    {description :'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.',
        status:'Finished'
    },
{description :'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.',
        status:'In progress'
    },
    {description :'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.',
        status:'In progress'
    },
    {description :'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.',
        status:'Not Started'
    },
    {description :'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.',
        status:'Not Started'
    },
    {description :'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.',
        status:'Finished'
    },
    {description :'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.',
        status:'Not Started'
    },
    {description :'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.',
        status:'In progress'
    },
    {description :'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.',
        status:'Not Started'
    },
    {description :'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.',
        status:'Finished'
    },
    ]
    
  return (
        <div className="container m-5">
        <div className="row">
            <h2 className='text-info'>Tasks</h2>
           { listofTasks.map((task,index) =>
            (<>
            <div className='col-md-6 mb-2' key={index}>
<TaskCard task ={task}/>
            </div>
            </>))}
                



        </div>
    </div>
  )
}
