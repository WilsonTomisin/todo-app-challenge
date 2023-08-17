import React from 'react'

export const Activegoals = ({list , completedGoals}) => {
  // const [activeGoals, setactiveGoals] = React.useState(list.todo.filter((item,index)=> item. == false))

  function handleActive() {
    console.log('clicked active link')
  }

  return (
    <div className=' mt-4 rounded-lg border-b-2 border-slate-500 bg-slate-900 h-auto w-full p-3 text-white' onClick={handleActive}>
        {list.todo.map((item, index)=>{
          const isdisabled = item.disabled == true 
          return(
            <div key={ index } className=' p-4 text-2xl text-red-600'>
              {!isdisabled &&  item.text}
              <span> { !isdisabled && item.id } </span>
            </div>
          )
        })}
        <span className=' text-slate-500'> Active-goals</span>
    </div>
  )
}

