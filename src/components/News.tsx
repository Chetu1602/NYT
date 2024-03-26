import React from 'react'
import { Link } from 'react-router-dom'

interface newsProp{
    news:any
    search:any
    searchRef:any
}
const News = (props:newsProp) => {
  return (
    <>
      <div className='newsProperties'>
      <h1 className='textMargin  ' ref={props?.searchRef}>NEWS</h1>
      </div>
      
      <div className=' textMargin grid grid-cols-5 '>
        {props?.news?.filter((data:any)=>data.title.includes(props?.search)).map((data:any)=>{
            return <>
            <Link to='/details' state={{data:data}}>
            <div className='w-60 mb-[3rem]'>
               <img className='imgStyle w-60 h-[9rem]' src={data?.urlToImage} alt="Image" />
               <h1 className='imgTitleStyle'>{data?.title}</h1> 
            </div>
            </Link>
            

            </>
        })}
    </div>
    </>
    
  )
}

export default News