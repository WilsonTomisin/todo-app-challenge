import React from 'react';
import '../styles/todolist.css'


export const Todolist = ({ list, dispatch, setcompletedGoals }) => {
    const newArr = [ ...list.todo]
    const isPlural = newArr.length > 1 ? 'goals' : 'goal'
    
return (
    <div className=' mt-4 bg-slate-900 rounded-lg text-white font-semibold border-b-2 border-slate-500'>
    
        { newArr.map((item, index)=>{
            
            const acheived = item.disabled == true ? 'achieved':'' ;
            const disabledCheckbox = item.disabled === true ? 'checked' :''
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
                            
                        }} disabled={item.disabled} className= {`${disabledCheckbox}`} />
                         <span className={`checkmark ${disabledCheckbox}`}></span> 
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
        <div className=' text-slate-500 p-3 font-normal'>You added { newArr.length} new {isPlural} </div>
        
    </div>
  )
}
