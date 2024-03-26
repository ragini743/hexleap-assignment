import React from 'react'

const Ads: React.FC = () => {
  return (
    <div className='bg-white dark:bg-dark-slide mb-4 p-2 border-1 shadow-lg lg:w-[calc(100%/5)] w-[100%] sm:w-[calc(50%-20px)] md:w-[calc(30%-20px)]'>
    <div className='relative dark:text-gray-200'>
      <div className=' bg-slate-950 text-white font-bold -mb-2 flex  py-2 px-4 right-0 justify-end absolute'>
         Ad
      </div>
        <div>
            <img className="w-full  object-cover" src="/ads-logo.png" alt='ads'></img>
        </div>
      
        <div className='border-2 pl-4 border-gray-300 dark:border-gray-700'>
          <h1 className='font-bold my-4'>AdvertiseMent title</h1>
            <div className=' pb-20 '>
                <p className='text-light-gray text-sm  dark:text-gray-300 text-wrap'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores facere quia, adipisci animi officia cumque eos quas beatae quasi expedita porro perspiciatis consequuntur vitae pariatur exercitationem eveniet, odit necessitatibus impedit!
                </p>
               
            </div>
        </div>
    </div>
</div>
  )
}

export default Ads