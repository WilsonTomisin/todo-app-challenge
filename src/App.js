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
    <div className={` tablet:h-full mobile:h-full w-full transition duration-1000 ease-out  ${lightTheme} body`}>
      <img src={lightBg} className=' transition-all.26+'/>
      <div className='  flex items-center justify-center mobile:p-9 mobile:mt-16 tablet:mt-0 '>
        <Todo setLight = {setLight} islight= {islight}/>
      </div>
      <div className=' text-slate-500 pb-20 text-center -mt-20'>Drag and drop to reorder list</div>
      
      <Footer islight={islight}/>
    </div>
  )
}

export default App
