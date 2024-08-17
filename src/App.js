import './App.css';
import { useState } from 'react';
function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  
 const handleInputChange = (e) => {
   let task = e.target.value;
   setTask(task);
 };
  
  const handleClick = (e) => {
    const addTask = [...tasks, {
      id: new Date().getTime(),
      title: task,
      completed: false,
     
    }];
    setTasks(addTask);
    setTask('');
  }

 

  const handleCheckbox = (id) => {
    const updatedData = [...tasks].map(res => {
      if (res.id === id)
      {
        res.completed=!(res.completed)
      }
      return res;
    })
    setTasks(updatedData);
   // console.log(updatedData);
  }

  const handleDelete = (id) => {
    const deletedData = tasks.filter((value) => value.id !== id)
    setTasks(deletedData);
  }


  const handleEdit = (id) => {
    const task = [...tasks];
    const newTask = prompt("Add New Task");
    
    const newTasks = task.filter(item => {
      if (item.id === id) {
        item.title=newTask
      }
      return item;
    })
    setTasks(newTasks);
  }
  

  return (
    <div className="App">
      <h1>
        <>
          <div className='bg-slate-600 rounded-lg my-6 mx-auto p-8 w-[500px]'>
          <div>
            <h1 className='text-center mb-8 text-3xl font-bold text-white'>Todo List</h1>
            <div className='container'>
              <div className='flex gap-2' >
                  <input type='text' onChange={handleInputChange} value={task} className='grow' />
                  <button onClick={handleClick} className='text-white bg-green-500 px-4 py-2'>Add</button>
              </div>
              </div>
              {
                tasks.map((item) => {
                  return (
                    <div className='bg-slate-700 text-white p-2 my-4 flex justify-between' key={item.id} title={item.title}>             
                        <div className='flex justify-between gap-2 '>
                        <div>
                          <input type='checkbox'
                          className='my-2'
                          onChange={() => handleCheckbox(item.id)}
                          checked={item.completed} />
                          </div>
                          <div>{item.title}</div>
                      </div>
                      
                      <div className='flex gap-2'>
                      <button
                          onClick={() => handleEdit(item.id)}
                          
                          className='bg-zinc-300 text-black px-2'
                        >
                         Edit 
                        </button>
                        
                      <button
                        onClick={()=>handleDelete(item.id)}
                        className='bg-red-700 text-white px-2 '>
                        Delete
                      </button>       
                      </div>              
                      </div>
                  )
                })
              }
              </div>
          </div>
        </>
      </h1>
    </div>
  );
}

export default App;
