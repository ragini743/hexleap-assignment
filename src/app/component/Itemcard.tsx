import React from 'react'

interface ItemcardProps {
    data:any
}

const Itemcard:React.FC<ItemcardProps> = ({data}) => {
//  console.log("datta",data);
 const {name,event,imagePath,sport} = data ;
 
    return (
    <div className='dark:bg-dark-slide bg-white   mb-4 p-2 border-1 shadow-lg lg:w-[calc(20%-20px)] mx-auto w-[100%] sm:w-[calc(50%-20px)] md:w-[calc(30%-20px)]'>
        <div>
            <div>
                <img className="w-full  object-cover" src={imagePath} alt='player img'></img>
            </div>
            <h1 className='font-bold my-4'>
                {name}
            </h1>
            <div className='dark:bg-black bg-gray  flex p-2 '>
                <div className=' w-[50%]'>
                    <p className='text-light-gray text-sm md:text-xs dark:text-gray-400'>Total Events</p>
                    <p className='font-bold  dark:text-gray-300'>{event} Events</p>
                </div>
                <div className='w-[50%]'>
                    <p className='text-sm text-light-gray md:text-xs dark:text-gray-400'>Sport </p>
                    <p className='font-bold last: dark:text-gray-300'>{sport} </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Itemcard