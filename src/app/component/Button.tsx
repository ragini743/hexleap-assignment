"use client"
import React from 'react'
interface ButtonProps{
  isShowMoreItem:boolean,
}
const Button:React.FC<ButtonProps> = ({isShowMoreItem}) => {
  // console.log(isShowMoreItem)
  return (
    <div className='my-10 flex justify-center'>
        <button className='dark:bg-blue-400 py-4 px-6 bg-blue-500 text-white font-bold rounded-md'>
           {isShowMoreItem?"Hide":"See More"}
        </button>
    </div>
  )
}

export default Button