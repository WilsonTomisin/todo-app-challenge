import React from 'react'

export const Activegoals = ({list , completedGoals}) => {
  const [activeGoals, setActiveGoals] = React.useState(list.todo.filter((item)=> item.completed == false))

  return (
    <div className=' mt-4 rounded-lg border-b-2 border-slate-500 bg-slate-900 h-auto w-full p-3 text-white'>
        {activeGoals.map((item, index)=>{

          return(
            <div key={ index } className=' p-4 text-2xl text-red-600'>
              {item.text},
              <span> { item.id } </span>
            </div>
          )
        })}
        <span className=' text-slate-500'> Active-goals</span>
    </div>
  )
}

