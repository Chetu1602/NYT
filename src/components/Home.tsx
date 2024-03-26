import React from 'react'
import { Link } from 'react-router-dom'

interface newsProp{
    news:any
    num:any
}
const Home = (props:newsProp) => {
  return (
    <div className='homeContainer contentStyle w-[77%]'>
    <div>
        <Link to="/details" state={{data:props?.news[`${props?.num}`]}}><div className='flex'>
            <div>
            <h1 className='font-bold text-xl font-serif'>{props?.news[`${props.num}`]?.title}</h1>
            <p className='text-sm font-serif'>{props?.news[`${props.num}`]?.content}</p>
            </div>
            <img className='w-[63%] h-[22rem] ml-7'src={props?.news[`${props.num}`]?.urlToImage} alt="Img" />
        </div>
        </Link>
    </div>
    <div className="borderBottom"></div>

    </div>
    
  )
  
}


export default Home