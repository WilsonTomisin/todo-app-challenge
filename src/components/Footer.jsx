import React from 'react'
import { links } from '../context/constants'

export const Footer = ({islight}) => {
    
    const isWhite = !islight ? "text-white" : "text-slate-900"
  return (
    <div className={` text-xl ${isWhite} font-bold h-auto width-full flex tablet:flex-row tablet:justify-between p-8 mobile:flex-col-reverse mobile:items-center`}>
        <span className=' animate-pulse'>Created by WilsonTomisin</span>
        <ul className=' flex items-center justify-between mobile:mb-7 tablet:mb-0 '>
           {links.map((item, index)=>{
            const paddingx = index==1 ? 'px-4' : ''
            return(
                <li key={index} className={`${paddingx} text-2xl`}>
                    <a href= {item.link} target='__blank'> {item.icon} </a>
                </li>
            )
           })}
           
        </ul>
        <span className=' animate-bounce mobile:mb-4 tablet:mb-0'>
           Challenge by <a href="https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW" target="_blank">Frontend Mentor</a>.
        </span>
    </div>
  )
}
