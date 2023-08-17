import React from 'react'

export const Activegoals = ({list}) => {


  return (
    <div className=' mt-4 rounded-lg border-b-2 border-slate-500 bg-slate-900 h-auto w-full p-3 text-white'>
        {list.todo.map((item, index)=>{
          const isdisabled = item.disabled == true 
          const truetext = isdisabled ? 'true' : 'false'
          return(
            <div key={ index } className=' p-4 text-2xl font-bold text-red-600'>
              {!isdisabled &&  item.text}
              <div className=' text-sm font-light text-white'>
                {!isdisabled && 'is this goal completed: '}
                <span className=' text-red-500'>{ !isdisabled &&  truetext }</span>
              </div>
            </div>
          )
        })}
        <span className=' text-slate-500'>list of active-goals</span>
    </div>
  )
}

