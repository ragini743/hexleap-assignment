"use client"
import React, { useEffect, useState } from 'react';
import { collectionOfSportPlayer } from '../utils/constant';
import Itemcard from './Itemcard';
import Ads from './Ads';
import Button from './Button';
import Spotlight from './Spotlight';

interface playerData{
  name:string ,
  event:number,
  sport :string ,
  id:number,
  imagePath:string,
}





const SportsData: React.FC = () => {
  const [playerData,setPlayerData] = useState<playerData[]>([]);
  const [isShowMoreItem,setIsShowMoreItem] = useState<boolean>(false);

  const toggleShowItem=() =>{
setIsShowMoreItem(!isShowMoreItem)
  }
  useEffect(() =>{
    setPlayerData(collectionOfSportPlayer)
  },[playerData] );



  if(playerData.length===0) return ;
  return (
    <div className='dark:bg-black sm:p-10 md:p-16 lg:p-24 bg-gray  p-4'>
      <span className='dark:text-white dark:border-blue-500 border-b-2 font-bold border-blue-700 pb-1 text-xl  '>
        Sports
      </span>
      <div className='flex w-[100%] overflow-auto flex-wrap mt-8'>
      {
         playerData.slice(0,isShowMoreItem?playerData.length:4).map((data) =>(
          <Itemcard key={data.id} data={data} />
         )) 
        }
        
          <Ads />
         
      </div>
      {/* <div className=' mt-8 sm:gap-6 sm:grid sm:grid-cols-2 md:gap-2 md:grid-cols-4 lg:grid-cols-5 overflow-x-auto whitespace-nowrap flex-nowrap grid-rows-1 '>
      
        {
         collectionOfSportPlayer.map((data) =>(
          <Itemcard key={data.id} data={data} />
         )) 
        }
        
          <Ads />
        
      </div> */}
      <div className=''onClick={toggleShowItem}>
        <Button isShowMoreItem={isShowMoreItem} />
      </div>
      <Spotlight />
    </div>
  );
};

export default SportsData;
