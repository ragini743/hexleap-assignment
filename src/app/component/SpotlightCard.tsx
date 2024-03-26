import React from 'react'
interface SpotlightCardProps {
    data:any
}
const SpotlightCard:React.FC<SpotlightCardProps> = ({data}) => {
    const {name,date,place,imagePath,city,collection}= data ;
  return (
    <div className='bg-white mb-4 p-2 border-1 shadow-lg flex-grow-0 flex-shrink-0  overflow-x-hidden md:mr-10  dark:bg-dark-slide dark:text-gray-500 '>
         <div className='w-[100%] '>
            <img className="w-full object-cover" src={imagePath} alt='player img'></img>
         </div>
         <div className='border-b-2 mx-6
           border-dashed border-slate-500 flex justify-between items-center relative'>
         <div className='absolute h-6 w-8 
         border-l-1 shadow-inner -bottom-4 border-gray-50 dark:bg-spot-bg dark:border-gray-100 
          rotate-180 rounded-full -left-12 bg-gray'>

         </div>
         <div className='shadow-inner absolute h-6 w-8 
         border-l-1 -bottom-4 border-gray-50  rounded-full -right-12 bg-gray   dark:bg-spot-bg dark:border-gray-50 '>

         </div>
         </div>
         <div className='text-center mt-6 md:text-[0.75rem] lg:text-[1rem]'> 
            <h1 className='font-bold text-lg mb-4 dark:text-gray-200'>
                {name}
            </h1>
            <p className='mb-4 dark:text-gray-300'>
                {date}
            </p>
            <p className='text-gray-500 dark:text-gray-400'>
                {place}
            </p>
            <p  className='text-gray-500 dark:text-gray-400'>
                {city}
            </p>
            <div className='mt-4'>
                <button className='bg-slate-900 text-white px-4 py-2 dark:text-gray-200'>
                    {collection}
                </button>
            </div>
         </div>
        
        

    </div>
  )
}

export default SpotlightCard