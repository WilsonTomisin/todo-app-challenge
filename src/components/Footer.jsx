import React from 'react'
import { BsTwitter, BsMedium, BsGithub} from 'react-icons/bs'

export const Footer = ({islight}) => {
    const links =[
        {icon: <BsTwitter/> , link : 'https://twitter.com/WilsonTomisin'},
        {icon: <BsMedium/> , link: 'https://medium.com/@tommywilson972'},
        { icon: <BsGithub/> , link : 'https://github.com/WilsonTomisin'}
    ]
    const isWhite = !islight ? "text-white" : "text-slate-900"
  return (
    <div className={` text-xl ${isWhite} font-bold h-auto width-full flex tablet:flex-row tablet:justify-between p-8 mobile:flex-col-reverse mobile:items-center`}>
        <span className=' animate-pulse'>Created by WilsonTomisin</span>
        <ul className=' flex items-center justify-between mobile:mb-7 tablet:mb-0'>
           {links.map((item, index)=>{
            const paddingx = index==1 ? 'px-4' : ''
            return(
                <li key={index} className={`${paddingx} text-2xl`}>
                    <a href= {item.link} target='__blank'> {item.icon} </a>
                </li>
            )
           })}
        </ul>
    </div>
  )
}
