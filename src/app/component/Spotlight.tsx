import React, { useEffect, useState } from 'react'
import { spotlightCollection } from '../utils/constant';
import SpotlightCard from './SpotlightCard';
interface spotlightData{
     name:string,
     date:string,
     place:string,
     id:number,
     imagePath:string,
     city:string,
     collection:string,
}
const Spotlight:React.FC = () => {
    const [spotlightData,setSpotlightData] = 
    useState<spotlightData[]>([]);
    useEffect(() =>{
      setSpotlightData(spotlightCollection)
    },[] )
    
    // console.log(playerData)
    if(spotlightData.length===0) return ;

  return (
    <div className='pt-10'>
        <div className='text-center'>

            <h1 className='font-bold md:text-5xl '>Collection Spotlight</h1>
            <p className='my-8 '>Discover extraordinary moments with our Spotlight Collection
                 metatickets- exclusive access to premium events for an 
                 unforgettable experience .Grab yours today !</p>

        </div>
        <div className='flex items-center'>
        <div className='w-[15%]'>
          <img src='./backspace.png'alt=''></img>
        </div>
        <div className='flex  h-[100%] w-[70%] items-stretch overflow-x-hidden justify-between'>
         {
          spotlightData.map((data) =>(
            <SpotlightCard key={data.id} data={data} />
          ))
         }
          
        </div>
        <div  className='w-[15%] flex justify-end'>
          <img src='./forwardSpace.png'alt=''></img>
        </div>
        </div>
     
    </div>
  )
}

export default Spotlight ;