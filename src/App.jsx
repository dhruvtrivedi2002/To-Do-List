import React, { useState } from 'react'

function App() {
  const [task,settask] = useState("")
  const [maintask,setmaintask] = useState([])
  let rendertask = <h1>No task avilable</h1>

  const Submithandler = (e) => {
    e.preventDefault()
    setmaintask([...maintask,{task}])
    console.log(maintask)
    settask("")
  }

  const deletehandler = (i) =>{
    let copytask = [...maintask]
    copytask.splice(i,1)
    setmaintask(copytask)
  }

  if(maintask.length > 0){
    rendertask = maintask.map((t,i)=>{
    return <li className='flex justify-between text-3xl '>
      <div >
        <h3>{t.task}</h3>
      </div>
      <button className='bg-red-900 font-bold p-2 mb-2' onClick={deletehandler}>Delete</button>
    </li>
  })}
  return (
   <>

   <h1 className="bg-black text-white text-5xl flex justify-center">My todolist</h1>
   <form onSubmit={Submithandler} className='flex justify-center'>
    <input type="text" value={task} placeholder="Enter your task" onChange={(e)=>{settask(e.target.value)}} 
    className="border-4 border-black  mt-3 mb-3"/>
    <button className="bg-black text-white font-bold p-2 m-3">Add task</button>
   </form>
   <hr />
   <div className='bg-slate-500 h-auto p-3'>
    {rendertask}
   </div>
     </>
  )
}

export default App