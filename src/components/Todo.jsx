import '../styles/todo.css'
import React from 'react'
import { useState, useReducer } from 'react'
import { Todolist } from './Todolist'
import { BsFillSunFill, BsFillMoonFill} from 'react-icons/bs'

export const Todo = ({islight, setLight}) => {
    const initialstate ={
        todo:[]
    }
    const stateReducer =(state ,action)=>{
        if (action.type == 'add') {
            const Newgoal = action.payload
            console.log(`new goal added: ${Newgoal.text}`);
            return {
                ...state,
                todo:[...state.todo, Newgoal]
            }
        } else if( action.type == 'remove'){
            console.log('removed todo item.')
            return{
                todo: state.todo.filter((item)=> item.id !== action.payload)
            }

        }
    }

    const [state, dispatch] = useReducer(stateReducer, initialstate )
    const [ todo , setTodo] = useState(initialstate.todo)
    
  return (
    <div className=' relative -top-32 w-96 todo border-2 border-blue-700 '>
      <div className=' flex items-center justify-between'>
        <h1 className=''>TODO</h1>
        <button className=' bg-transparent text-white rounded-xl' onClick={(e)=>{
            setLight((preval)=> !preval)
        }}>
            { !islight ? <BsFillSunFill/> : <BsFillMoonFill/> }
            
        </button>
      </div>
        <div className=' relative'>
            <input type="text" className=' bg-slate-900 px-4 py-4 w-full rounded-lg text-white font-bold'
             value={todo} 
             onChange={(e)=>(setTodo(e.currentTarget.value))}/>
            <button className=' bg-green-500 px-1 absolute left-72 top-4'
            onClick={(e)=>{
                e.preventDefault()
                setTodo('')
                if (todo.length > 3) {
                    const updatedGoal={ id: Date.now() , text: todo}
                    dispatch({
                        type: 'add',
                        payload: updatedGoal
                    })
                    
                }
                
            }}>+</button>
            { <Todolist list={state} dispatch={dispatch}/>}
        </div>
        
    </div>
  )
}

