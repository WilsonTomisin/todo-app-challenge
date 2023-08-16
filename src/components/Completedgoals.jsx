import React from 'react'

export const Completedgoals = ({completedGoals, setcompletedGoals}) => {
    // const [uniqueGoals, setuniqueGoals] = useState(completedGoals.filter(()=>{}))

    React.useEffect(()=>{
        console.log(completedGoals)
        console.log(typeof(completedGoals));
    },[])
  return (
    <div className=' bg-slate-900 h-auto w-full p-3 text-white mt-4 rounded-lg border-b-2 border-slate-500'>
        {/* {completedGoals.text} */}
        {completedGoals.map((item, index)=>{
            // const unique = item.id !== item.id
            

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

