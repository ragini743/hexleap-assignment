import React from 'react'
interface SpotlightCardProps {
    data:any
}
const SpotlightCard:React.FC<SpotlightCardProps> = ({data}) => {
    const {name,date,place,imagePath,city,collection}= data ;
  return (
    <div className='bg-white mb-4 p-2 border-1 shadow-lg flex-grow-0 flex-shrink-0  overflow-x-hidden mr-10 '>
         <div className='w-[100%] '>
            <img className="w-full object-cover" src={imagePath} alt='player img'></img>
         </div>
         <div className='border-b-2 mx-6
           border-dashed border-slate-500 flex justify-between items-center relative'>
         <div className='absolute h-6 w-8 
         border-l-1 shadow-inner -bottom-4 border-gray-50 
          rotate-180 rounded-full -left-12 bg-gray'>

         </div>
         <div className='shadow-inner absolute h-6 w-8 
         border-l-1 -bottom-4 border-gray-50  rounded-full -right-12 bg-gray'>

         </div>
         </div>
         <div className='text-center mt-6'> 
            <h1 className='font-bold text-lg mb-4'>
                {name}
            </h1>
            <p className='mb-4'>
                {date}
            </p>
            <p className='text-gray-500'>
                {place}
            </p>
            <p  className='text-gray-500'>
                {city}
            </p>
            <div className='mt-4'>
                <button className='bg-slate-900 text-white px-4 py-2'>
                    {collection}
                </button>
            </div>
         </div>
        
        

    </div>
  )
}

export default SpotlightCard