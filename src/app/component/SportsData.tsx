"use client"
import React, { useEffect, useState } from 'react';
import { collectionOfSportPlayer } from '../utils/constant';
import Itemcard from './Itemcard';

interface playerData{
  name:string ,
  event:number,
  sport :string ,
  id:number,
  imagePath:string,
}

const SportsData: React.FC = () => {
  const [playerData,setPlayerData] = useState<playerData[]>([]);
  useEffect(() =>{
    setPlayerData(collectionOfSportPlayer)
  },[] )
  
  console.log(playerData)
  if(playerData.length===0) return ;
  return (
    <div className='dark:bg-black bg-gray p-4'>
      <span className=' border-b-2 font-bold border-blue-700 pb-1 '>
        Sports
      </span>
      <div>
        {
         collectionOfSportPlayer.map((data) =>(
          <Itemcard key={data.id} data={data} />
         )) 
        }
      </div>
    </div>
  );
};

export default SportsData;
