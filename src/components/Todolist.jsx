import React from 'react';
import '../styles/todolist.css'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';


export const Todolist = ({ list, dispatch, setcompletedGoals }) => {
    const newArr = [ ...list.todo]
    const [Data, setData] = React.useState(newArr)
    const isPlural = newArr.length > 1 ? 'goals' : 'goal';

    const handleDrag=(results)=>{
        console.log(results)
        const {source, destination} = results
        if (!destination) return ;
        if (source.index == destination.index)  return;

        const ReorderedItems = [...Data]
        const [reorderedItem] = ReorderedItems.splice(source.index, 1);
        ReorderedItems.splice(destination.index, 0, reorderedItem);
        // console.log(newArr);
        setData(ReorderedItems)
    }
    React.useEffect(()=>{
        setData(list.todo)
    },[list.todo])
return (
    <div className=' shadow-lg'>
        <DragDropContext onDragEnd={handleDrag}>
        <Droppable droppableId='ROOT' type='group'>
            {(provided)=>(
                <div {...provided.droppableProps} ref={provided.innerRef} className=' mt-4 bg-slate-900 rounded-lg text-white font-semibold border-b-2 border-slate-500  '>
                    { Data.map((item, index)=>{
                        const acheived = item.disabled == true ? 'achieved':'' ;
                        const disabledCheckbox = item.disabled === true ? 'checked' :''
                        return(
                            <Draggable key={item.id} draggableId={item.id} index={index}>
                                {(provided)=>(
                                    <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                     className={` goal px-2 border-b-2 border-slate-500 flex items-center justify-between `}>
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
                                
                                )}

                            </Draggable>
                        )
                    })}
                <div className=' text-slate-500 p-3 font-normal'>You added { Data.length} new {isPlural} </div>
                
                </div>
            )}
        </Droppable>
        </DragDropContext>
    </div>
  )
}
