import React from 'react'

interface ItemcardProps {
    data:any
}

const Itemcard:React.FC<ItemcardProps> = ({data}) => {
 console.log("datta",data);
 const {name,event,imagePath,sport} = data ;
 
    return (
    <div className='bg-white p-2 border-1 shadow-lg'>
        <div>
            <div>
                <img className="w-full  object-cover" src={imagePath} alt='player img'></img>
            </div>
            <h1 className='font-bold'>
                {name}
            </h1>
            <div className='bg-gray'>
                <div>
                    <p>Total Events</p>
                    <p>{event} Events</p>
                </div>
                <div>
                    <p>Sport</p>
                    <p>{sport} Events</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Itemcard