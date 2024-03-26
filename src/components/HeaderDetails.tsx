import React ,{ useState } from 'react'
import { useLocation } from 'react-router-dom'

import '../../src/index.css'

const HeaderDetails = () => {
  const location=useLocation()
    console.log(location)
  return (
    <>
        <div className='flex headerBorderBottom'> 
            <img  className='w-[50px] h-[42px]  logoDeatils' src="data:image/png;base64,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" alt="" />
            <div className='ml-[19rem] pt-[20px]'>
                <ul className='flex listLi'>
                    <li className='font-bold pr-[15px] headerFirstChild'>Trump Hush-Money Case</li>
                    <li className='headerBorder mr-[1.4em] pl-[15px] headerFont'>Updates</li>
                    <li className='mr-[1.4em] headerFont'>Trump’s Stalling Strategy</li>
                    <li className='mr-[1.4em] headerFont'>The Indictment</li>
                    <li className='mr-[1.4em] headerFont'>Who Is Alvin Bragg?</li>
                    <li className='mr-[1.4em] headerFont'>Trump Case Tracker</li>
                </ul>
            </div>
        </div>

    </>
  )
}

export default HeaderDetails