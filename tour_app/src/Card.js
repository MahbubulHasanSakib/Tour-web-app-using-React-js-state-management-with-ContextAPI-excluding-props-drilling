import React from 'react'
import Button from './Button'
import {useState} from 'react'
const Card = ({singlePlace,removePost}) => {
    const [showLess,setShowLess]=useState(true);
    let shortText=singlePlace.info.substring(0,180);
    return (
        <div className="card">
        <img src={singlePlace.image}/>
        <div className="card_bottom">
            <div className="card_bottom_top">
            <h4>{singlePlace.name}</h4>
            <span>${singlePlace.price}</span>
            </div>
            {showLess? <p>{shortText} <span onClick={()=>setShowLess(false)} className="see_more">...See More</span></p>:
            <p>{singlePlace.info} <span onClick={()=>setShowLess(true)} className="see_less"> See Less</span></p>}
        </div>
        <Button  pid={singlePlace.id}/>
        </div>
    )
}

export default Card
