import React from 'react'

export const Completedgoals = ({completedGoals}) => {
    const plural = completedGoals.length > 1 ? 'completedGoals' : 'completedGoal'
  return (
    <div className=' bg-slate-900 h-auto w-full p-3 text-white mt-4 rounded-lg border-b-2 border-slate-500'>
        
        {completedGoals.map((item, index)=>{
            
            return(
                <div key={item.id} className=' text-2xl font-bold text-green-600 p-4  '>
                    {item.text}
                </div>
            )
        })}
        <span className=' text-slate-500'>{`${completedGoals.length} ${plural} `}</span>
    </div>
  )
}

