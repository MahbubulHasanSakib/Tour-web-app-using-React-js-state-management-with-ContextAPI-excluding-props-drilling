import React from 'react'
import Card from './Card'
import { useContext } from 'react'
import { tourContext } from './tourProvider'
const Places = () => {
    const val = useContext(tourContext);
    console.log(val)
    const { forLoad, forPlace } = val;
    const [isloading, setIsloading] = forLoad;
    const [places, setPlaces] = forPlace;
    console.log(places, isloading)
    //console.log(places)
    return (
        <div>
            {
                places.length == 0 && !isloading ?
                    <div className="title">
                        <h1 className="tourHeading">No Tours Left</h1>
                        <a href="http://localhost:3000/">Refresh</a>
                    </div> : !isloading ? <div className="title">
                        <h1 className="tourHeading">Our Tours</h1>
                        <div className="line"></div>
                    </div> : null}
            {
                !isloading ?
                    places.map((place) => {
                        return <Card key={place.id} singlePlace={place} />
                    }) : <div className="title">
                        <h1 className="tourHeading">Loading...</h1>
                    </div>
            }
        </div>
    )
}

export default Places

