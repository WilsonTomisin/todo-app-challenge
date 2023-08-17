import React from 'react';
import './styles/App.css';
import darkImg from './images/bg-desktop-dark.jpg'
import lightImg from './images/bg-desktop-light.jpg'
import { Todo } from './components/Todo';
import { useState } from 'react';
import { Footer } from './components/Footer';





const App = () => {
  const [light, setLight] = useState(false)
  const islight = light == true

  const lightTheme = islight? 'bg-white'  : 'bg-slate-800'
  const lightBg = islight ? lightImg : darkImg
  return (
    <div className={`h-auto w-full transition duration-1000 ease-out  ${lightTheme} body`}>
      <img src={lightBg} className=' transition-all.26+ '/>
      <div className=' h-full flex items-center justify-center pb-20'>
        
        <Todo setLight = {setLight} islight= {islight}/>
      </div>
      <Footer islight={islight}/>
    </div>
  )
}

export default App
