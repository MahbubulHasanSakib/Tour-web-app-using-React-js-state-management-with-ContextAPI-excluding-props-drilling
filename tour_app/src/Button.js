import React,{useState,useContext} from 'react'
import { tourContext } from './tourProvider'
const Button = ({pid}) => {
    const val=useContext(tourContext);
const {forLoad,forPlace}=val;
const [places,setPlaces]=forPlace;
     const removePost=(id)=>
  {
    const newPlaces=places.filter((place)=>place.id!==id);
    setPlaces(newPlaces)
  }
    return (
        <div>
            <button onClick={()=>removePost(pid)} id="btn">Not interested</button>
        </div>
    )
}

export default Button
