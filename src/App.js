import React from 'react';
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
    <div className={`h-screen w-full relative ${lightTheme}`}>
      <img src={lightBg}/>
      <div className=' absolute left-1/2 -translate-x-1/2 -translate-y-2/3'>
        <Todo setLight = {setLight} islight= {islight}/>
      </div>
    </div>
  )
}

export default App
