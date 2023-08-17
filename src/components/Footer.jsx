import React from 'react'
import { BsTwitter, BsMedium, BsGithub} from 'react-icons/bs'

export const Footer = ({islight}) => {
    const links =[
        {icon: <BsTwitter/> , link : 'https://twitter.com/WilsonTomisin'},
        {icon: <BsMedium/> , link: ''},
        { icon: <BsGithub/> , link : 'https://github.com/WilsonTomisin'}
    ]
    const isWhite = !islight ? "text-white" : "text-slate-900"
  return (
    <div className={` text-xl ${isWhite} font-bold h-auto width-full flex items-end justify-between p-8`}>
        <span>Created by WilsonTomisin</span>
        <ul className=' flex items-center justify-between'>
           {links.map((item, index)=>{
            const paddingx = index==1 ? 'px-4' : ''
            return(
                <li key={index} className={`${paddingx}`}>
                    <a href= {item.link} target='__blank'> {item.icon} </a>
                </li>
            )
           })}
        </ul>
    </div>
  )
}
