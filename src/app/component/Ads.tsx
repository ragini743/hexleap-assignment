import React from 'react'

const Ads: React.FC = () => {
  return (
    <div className='bg-white mb-4 p-2 border-1 shadow-lg '>
    <div className='relative'>
      <div className=' bg-slate-950 text-white font-bold -mb-2 flex  py-2 px-4 right-0 justify-end absolute'>
         Ad
      </div>
        <div>
            <img className="w-full  object-cover" src="/ads-logo.png" alt='ads'></img>
        </div>
      
        <div className='border-2 pl-4 border-gray-300'>
          <h1 className='font-bold my-4'>AdvertiseMent title</h1>
            <div className=' pb-20 '>
                <p className='text-light-gray text-sm'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores facere quia, adipisci animi officia cumque eos quas beatae quasi expedita porro perspiciatis consequuntur vitae pariatur exercitationem eveniet, odit necessitatibus impedit!
                </p>
               
            </div>
        </div>
    </div>
</div>
  )
}

export default Ads