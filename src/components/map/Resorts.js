import React from 'react'

export const Resorts = (props) => {
    return (
        <div onClick={() => {
              props.setSelectedResort(props.resort)
          }}>
            <a href="#" className="list-group-item list-group-item-action">
                <p className="resortname">  {props.resortname} </p>
            </a>
         </div>
    )
}

export default Resorts