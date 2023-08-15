import '../styles/todo.css'
import React from 'react'
import { useState, useReducer } from 'react'
import { Todolist } from './Todolist'
import { Activegoals } from './Activegoals'
import { Completedgoals } from './Completedgoals'
import { BsFillSunFill, BsFillMoonFill} from 'react-icons/bs'
import { Route, Routes, Link} from 'react-router-dom';

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
    <div className=' relative -top-32 w-auto  '>
      <div className=' flex items-center justify-between'>
        <h1 className=' text-white font-bold text-3xl'>TODO</h1>
        <button className=' bg-transparent text-white rounded-xl text-xl font-bold' onClick={(e)=>{
            setLight((preval)=> !preval)
        }}>
            { !islight ? <BsFillSunFill/> : <BsFillMoonFill/> }
            
        </button>
      </div>
        <div className=''>
            <input type="text" className=' bg-slate-900 px-4 py-4 w-full rounded-lg text-white font-bold border-2 border-slate-950 hover:border-black'
             value={todo} 
             onChange={(e)=>(setTodo(e.currentTarget.value))}/>
            <button className=' rounded-lg relative left-1/2 -translate-x-1/2 mt-2 text-white bg-green-500 px-6 py-2 add-btn '
            onClick={(e)=>{
                e.preventDefault()
                setTodo('')
                if (todo.length > 3) {
                    const updatedGoal={ id: Date.now() , text: todo, completed:false}
                    dispatch({
                        type: 'add',
                        payload: updatedGoal
                    })
                    
                }
                
            }}>Add a goal </button>
            {<Routes>
               <Route path='/' element={<Todolist list={state} dispatch={dispatch}/>} />
               <Route path='/active' element={<Activegoals/>}/> 
               <Route path='/completed' element={<Completedgoals/>}/>
                
            </Routes>}
            <div className=' bg-slate-900 text-white flex items-center justify-between text-sm font-medium p-5'>
                <div className=' pr-2'>{state.todo.length} items left</div>
                <ul className=' flex items-center justify-between  px-5'>
                    <li className=' '>
                        <Link to={'/'}>
                            All
                        </Link>
                    </li>
                    <li className=' px-2'>
                        <Link to={'/active'}>
                            active
                        </Link>
                    </li>
                    <li>
                        <Link to={'/completed'}>
                            completed
                        </Link>
                    </li>
                </ul>
                <div className=' pl-2'>Clear completed</div>
            </div>
        </div>
        
    </div>
  )
}

