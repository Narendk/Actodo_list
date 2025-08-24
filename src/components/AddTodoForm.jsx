import React, { useState } from 'react'

const AddTodoForm = (props) => {

    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr

    const [newlist,setnewlist] = useState("")


    function handlechange(event){
        setnewlist(event.target.value)
    }

    function handleAdd(){
        setActivityArr([...activityArr,{id:activityArr.length+1,activity:newlist}])
        setnewlist("")
    }

    return (
        <div className='flex flex-col gap-3'>
            <h1 className='text-2xl font-medium'>Manage Activites</h1>
            <div>
                <input value={newlist} onChange={handlechange} className='border border-black bg-transparent p-1' />
                <button onClick={handleAdd} className='bg-black text-white p-1 border border-black'>Add</button>
            </div>
        </div>
    )
}

export default AddTodoForm