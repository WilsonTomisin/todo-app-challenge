import React from 'react'

export const Completedgoals = ({list ,completedGoals, setcompletedGoals}) => {
    // const [uniqueGoals, setuniqueGoals] = useState(completedGoals.filter(()=>{}))

    React.useEffect(()=>{
        // console.log(completedGoals)
        // console.log(typeof(completedGoals));
    },[])
  return (
    <div className=' bg-slate-900 h-auto w-full p-3 text-white mt-4 rounded-lg border-b-2 border-slate-500'>
        {/* {completedGoals.text} */}
        {completedGoals.map((item, index)=>{
            // const unique = item.id !== item.id
            
            // console.log(list.todo)
            // console.log('next log is the completed goals the previous is the state goals')
            // console.log(completedGoals)
            return(
                <div key={item.id} className=' text-2xl text-fuchsia-600 p-4  '>
                    {item.text}
                </div>
            )
        })}
        <span className=' text-slate-500'>{completedGoals.length} Completedgoals</span>
    </div>
  )
}

