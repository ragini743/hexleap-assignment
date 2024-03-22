import React from 'react'

interface ItemcardProps {
    data:any
}

const Itemcard:React.FC<ItemcardProps> = ({data}) => {
 console.log("datta",data);
 const {name,event,imagePath,sport} = data ;
 
    return (
    <div className='bg-white   mb-4 p-2 border-1 shadow-lg'>
        <div>
            <div>
                <img className="w-full  object-cover" src={imagePath} alt='player img'></img>
            </div>
            <h1 className='font-bold my-4'>
                {name}
            </h1>
            <div className='bg-gray flex p-2 '>
                <div className=' w-[50%]'>
                    <p className='text-light-gray text-sm md:text-xs'>Total Events</p>
                    <p className='font-bold'>{event} Events</p>
                </div>
                <div className='w-[50%]'>
                    <p className='text-sm text-light-gray md:text-xs'>Sport </p>
                    <p className='font-bold'>{sport} </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Itemcard