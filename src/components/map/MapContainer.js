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

import React, { Component, Fragment } from 'react'

import Map from './Map'
import ResortContainer from './ResortContainer'
import Spinner from '../containers/Spinner'


export class MapContainer extends Component {

    state = {
        resorts: [],
        selectedResort: null,
        loading: true
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
                resorts,
                loading: false
            })
            
          })
    }

    //check the spinner 
    render() {
        return ( this.state.loading && this.state.resorts === [] ? <Spinner /> : <Fragment>
            <div className='mapPage'>
                <ResortContainer resorts={this.state.resorts} setSelectedResort={this.setSelectedResort} />
                <Map resorts={this.state.resorts} setSelectedResort={this.setSelectedResort} selectedResort={this.state.selectedResort}/>
            </div> 
            </Fragment>
        ) 
    }
}

export default MapContainer