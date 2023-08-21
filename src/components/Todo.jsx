import '../styles/todo.css'
import React from 'react'
import { useState, useReducer , useRef } from 'react'
import { Todolist } from './Todolist'
import { Activegoals } from './Activegoals'
import { Completedgoals } from './Completedgoals'
import { BsFillSunFill, BsFillMoonFill} from 'react-icons/bs'
import { Route, Routes, Link} from 'react-router-dom';
import { datalinks } from '../context/constants'

export const Todo = ({islight, setLight}) => {
    const initialstate ={
        todo:[]
    }
    const stateReducer =(state ,action)=>{
        if (action.type == 'add') {
            const Newgoal = action.payload
            return {
                ...state,
                todo:[...state.todo, Newgoal]
            }
        } else if( action.type == 'remove'){
            
            return{
                todo: state.todo.filter((item)=> item.id !== action.payload)
            }

        } else if (action.type == 'checked') {
            return{
                ...state,
                todo: state.todo.map((item)=>(
                    item.id == action.payload ? { ...item, disabled : true} : item
                ))
            }
        }
    }

    const [state, dispatch] = useReducer(stateReducer, initialstate )
    const [ todo , setTodo] = useState(initialstate.todo)
    const [selectedLink, setSelectedLink] = useState('All')
    const [completedGoals, setcompletedGoals] = useState([])
    const inputRef = useRef(null)
    
    
    const handleClick =()=>{
        inputRef.current.focus()
        setTodo('')
        if (todo.length > 3) {
            const updatedGoal ={ 
                id: Math.random().toString(), // id has to be converted into a string because the of the beutiful-dnd
                text: todo ,
                completed : false
            }
            dispatch({type: 'add', payload: updatedGoal})
        }
        
        
    }


    
  return (
    <div className=' relative -top-32 w-auto  '>
      <div className=' flex items-center justify-between'>
        <h1 className=' text-white font-bold text-3xl animate-slow-bounce '>TODO</h1>
        <button className=' bg-transparent text-white rounded-xl text-xl font-bold animate-bounce' onClick={(e)=>{
            setLight((preval)=> !preval)
        }}>
            { !islight ? <BsFillSunFill/> : <BsFillMoonFill/> }
            
        </button>
      </div>
        <div className=''>
            <input type="text" className=' bg-slate-900 px-4 py-4 w-full rounded-lg text-white font-bold border-2 border-slate-950 hover:border-black'
             value={todo} 
             ref={inputRef}
             onChange={(e)=>(setTodo(e.currentTarget.value))}/>
            <button className=' rounded-lg relative left-1/2 -translate-x-1/2 mt-2 text-white bg-green-500 px-6 py-2 add-btn animate-pulse'
            onClick={(e)=>{
                e.preventDefault()
                handleClick()
            }}>Add a goal </button>
            {<Routes>
               <Route path='/' element={<Todolist list={state} dispatch={dispatch}  setcompletedGoals={setcompletedGoals}  />} />
               <Route path='/active' element={<Activegoals list={state} />}/> 
               <Route path='/completed' element={<Completedgoals setcompletedGoals={setcompletedGoals} completedGoals={completedGoals} list={state}/>}/>
                
            </Routes>}
            <div className=' bg-slate-900 text-white flex items-center justify-between text-sm font-medium p-5 shadow-2xl shadow-black'>
                <div className=' pr-2'>{state.todo.length - completedGoals.length} items left</div>
                <ul className=' flex items-center justify-between  px-5'>
                    {datalinks.map((item,index)=>{
                        const padding = index == 1 ? 'px-2':''
                        const active = selectedLink == item.text ? ' text-blue-600' : 'text-slate-400'
                        return(
                            <li  key={index} className={`${padding} ${active}`} onClick={(e)=>{
                            setSelectedLink(item.text)
                            
                            }}>
                                <Link to={item.path}>
                                    {item.text}
                                </Link>
                            </li>

                        )
                    })}
                    
                </ul>
                <div className=' pl-2 cursor-pointer  hover:text-fuchsia-600' onClick={()=> setcompletedGoals([])}>Clear completed</div>
            </div>
        </div>
        
    </div>

  )
}

