import React from 'react'
import Resorts from './Resorts'

export const ResortContainer = ({resorts, setSelectedResort}) => {
    return (
        <div>
            
            <ul className="list-group">
            <div className="resortTitleContainer">
               <p className="resortTitle"><b>Resorts</b></p> 
            </div>
                        {resorts.map((resort)=> {
                            return  <Resorts resort={resort} setSelectedResort={setSelectedResort} resortname={resort.resortname} logo={resort.logo} score={resort.score} latitude={resort.latitude} longitude={resort.longitude}/>   
                        })}
                </ul>    
        </div>
    )
}

export default ResortContainer
