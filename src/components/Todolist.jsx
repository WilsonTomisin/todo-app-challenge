import React from 'react';
import { useState } from 'react';
import '../styles/todolist.css'

export const Todolist = ({list, dispatch, setcompletedGoals}) => {
    // const [isChecked, setisChecked] = useState(false);
    
    // const done = isChecked == true



    
    
    // const newlength = list.todo.filter(item => !isChecked )
    
    
    // console.log('new arr length is '+ completedGoals.length)
  return (
    <div className=' mt-4 bg-slate-900 rounded-lg text-white font-semibold'>
        { list.todo.map((item, index)=>{
            const acheived = item.completed == true ? 'line-through':'none' ;
            return(
                <div key={index} className=' goal px-2 border-b-2 border-slate-500 flex items-center justify-between'>
                    <label className="custom-checkbox">
                        <input name='myCheckbox' type="checkbox"  onClick={(e)=>{
                            const completed = {...item ,completed : !item.completed}
                            
                            // setisChecked(!isChecked)
                            // console.log(isChecked)
                    
                            console.log(completed);
                            setcompletedGoals((preval)=>{
                                return[
                                    ...preval,
                                    completed
                                ]
                            })
                            // return completed
                        }} />
                        <span className="checkmark"></span>
                    </label>
                    <span className=' w-full p-8' style={{ textDecoration: acheived}} >
                        {item.text}
                    </span>
                    <button onClick={(e)=>{
                        e.preventDefault();
                        dispatch({type:'remove', payload: item.id})
                    }} className=' bg-red-700 px-3 rounded-xl pt-1 remove-btn'>X</button>
                </div>
            )
        })}
        
    </div>
  )
}
