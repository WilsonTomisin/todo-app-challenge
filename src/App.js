import React from 'react';
import './styles/App.css';
import darkImg from './images/bg-desktop-dark.jpg'
import lightImg from './images/bg-desktop-light.jpg'
import { Todo } from './components/Todo';
import { useState } from 'react';


const App = () => {
  const [light, setLight] = useState(false)
  const islight = light == true

  const lightTheme = islight? 'bg-white'  : 'bg-slate-800'
  const lightBg = islight ? lightImg : darkImg
  return (
    <div className={`h-auto w-full ${lightTheme} body`}>
      <img src={lightBg}/>
      <div className=' h-full flex items-center justify-center pb-72 border-4 border-red-600 todo-container'>
        
        <Todo setLight = {setLight} islight= {islight}/>
      </div>
    </div>
  )
}

export default App
