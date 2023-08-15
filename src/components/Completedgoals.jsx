import React from 'react'

export const Completedgoals = ({completedGoals}) => {
    React.useEffect(()=>{
        console.log(completedGoals)
        console.log(typeof(completedGoals));
    },[])
  return (
    <div className=' bg-slate-900 h-auto w-full p-3 text-white'>
        {/* {completedGoals.text} */}
        {completedGoals.map((item, index)=>{

            return(
                <div key={ index } className=''>
                    {item.text}
                </div>
            )
        })}
        Completedgoals
    </div>
  )
}

