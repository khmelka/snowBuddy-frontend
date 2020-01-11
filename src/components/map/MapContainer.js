// import React, {useState, useEffect} from 'react'
// import Map from './Map'
// import axios from 'axios'

// export const MapContainer = () => {
//     const [resorts, setResorts] = useState([])
//     const [selectedResort, setSelectedResort] = (null)
       

//         useEffect(() => {
//             const getResorts = async () => {
//                 const res = await axios (
//                     'https://blooming-everglades-24576.herokuapp.com/resorts'
//                 )
//                 setResorts (res.data)
//             }
//             getResorts()
//         }, [])



//     return (
//         <div>
//             <Map resorts={resorts} /> 
//         </div>
//     )
// }

// export default MapContainer

import React, { Component } from 'react'

import Map from './Map'
import ResortContainer from './ResortContainer'


export class MapContainer extends Component {

    state = {
        resorts: [],
        selectedResort: null
    }

    setSelectedResort = (resort) => {
     this.setState({
         selectedResort:resort
     })
    }

    // addFav=(resort)=> {
    //     if (!this.state.favs.includes(resort)){
    //         this.setState({favs: [...this.state.favs, resort]})
    //     }
    //   }

    //   removeFav=(resort)=>{
    //     this.setState({favs: this.state.favs.filter(favresort=>favresort !== resort)})
    //   }

    componentDidMount(){

        fetch("https://blooming-everglades-24576.herokuapp.com/resorts")
        .then(resp=>resp.json())
        .then(resorts=> {
            console.log("resorts", resorts)
            this.setState({
                resorts
            })
          })
    }

    render() {
        return ( 
            <div className='mapPage'>
                <ResortContainer resorts={this.state.resorts} setSelectedResort={this.setSelectedResort} />
                <Map resorts={this.state.resorts} setSelectedResort={this.setSelectedResort} selectedResort={this.state.selectedResort}/>
            </div> 
        ) 
    }
}

export default MapContainer