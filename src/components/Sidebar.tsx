import React from 'react'
import { Link } from 'react-router-dom'

interface newsProp{
    news:any
    num:any
}
const Sidebar = (props:newsProp) => {
  return (
    <>
    <div className="sideBarContainer w-4/12 ml-3 border-1-black p-3" style={{position:'relative'}}>
    <div className='sideBar '>
      <Link to="/details" state={{data:props?.news[`${props.num}`]}}>
      <div>
      <img className= 'sideBarImg w-[21rem] h-[14rem]' src={props?.news[`${props.num}`]?.urlToImage} alt="Img1"/>
        <h1 className='sideBarFont   mt-[2rem]'>{props?.news[`${props.num}`]?.title}</h1>
        <p className=' sideBarDes text-sm font-serif'>{props?.news[`${props.num}`]?.content}</p>
      </div>
      </Link>
        
    </div>
    {/* <div className="doubleBorder mb-[2px]"></div>
        <div className="doubleBorder"></div> */}
    </div>
    
    </>
  )
}

export default Sidebar



