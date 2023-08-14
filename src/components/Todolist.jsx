import React from 'react'

export const Todolist = ({list, dispatch}) => {
  return (
    <div className=' mt-4 bg-slate-900  text-white font-semibold'>
        { list.todo.map((item, index)=>{
            return(
                <div key={index} className=' py-4 border-b border-white flex items-center justify-between'>
                    <label className="custom-checkbox">
                        <input type="checkbox"/>
                        <span className="checkmark"></span>
                    </label>
                    <span className=' p-8 text-left'>{item.text}</span>
                    <button onClick={(e)=>{
                        e.preventDefault();
                        dispatch({type:'remove', payload: item.id})
                    }}>X</button>
                </div>
            )
        })}
        <div className=' bg-slate-900 text-white flex items-center justify-between text-sm font-medium'>
            <div>2 items left</div>
            <ul>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </ul>
            <div>Clear completed</div>
        </div>
    </div>
  )
}
