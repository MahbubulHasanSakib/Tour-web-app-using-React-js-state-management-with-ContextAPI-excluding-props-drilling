
import React from 'react';
import {useState,useEffect} from 'react';
export const tourContext=React.createContext();
const url='https://course-api.com/react-tours-project';
export const TourProvider=(props)=>
{
    const [places,setPlaces]=useState([]);
    const [isloading,setIsloading]=useState(true);
    useEffect(async()=>
    {
      const response= await fetch(url);
      const allPlaces=await response.json();
      setPlaces(allPlaces);
      setIsloading(false)
    },[]);

    return(
        <tourContext.Provider value={{forPlace:[places,setPlaces],forLoad:[isloading,setIsloading]}}>
            {props.children}
        </tourContext.Provider>
    )
}