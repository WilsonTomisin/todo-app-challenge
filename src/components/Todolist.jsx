import React from 'react';
import { useState } from 'react';
import '../styles/todolist.css'
import { Completedgoals } from './Completedgoals';

export const Todolist = ({ list, dispatch, setcompletedGoals }) => {
    const [isChecked, setIsChecked] = useState(false)
    // const [ newA, setNewA] = useState()
    const newArr = [ ...list.todo]
    
    
    // React.useEffect(()=>{
    //     console.log(newArr)
    // },[newArr])

    // const handleItemClick=(itemId)=>{
    //     setNewArr((preval)=>preval.map((item)=>(
    //             itemId == item.id ? {...item,disabled: true} : item
    //         ))
    //     )
        
    // }
    
return (
    <div className=' mt-4 bg-slate-900 rounded-lg text-white font-semibold'>
    
        { newArr.map((item, index)=>{
            
            const acheived = item.disabled == true ? 'text-overline':' ' ;
            return(
                <div key={index} className={` goal px-2 border-b-2 border-slate-500 flex items-center justify-between`} disabled={item.disabled}>
                    <label className="custom-checkbox" >
                        <input name='myCheckbox' type="checkbox" onClick={(e)=>{
                            const completed = {...item , completed : true}
                            setcompletedGoals((preval)=>{
                                return[
                                    ...preval,
                                    completed
                                ]
                            })
                            dispatch({type : 'checked' , payload : item.id})
                            // handleItemClick(item.id)
                        }} disabled={item.disabled} />
                         <span className="checkmark"></span> 
                    </label>
                    <span className={` w-full p-8 ${acheived} `}  >
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
