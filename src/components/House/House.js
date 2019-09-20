import React, {Component} from 'react'

export default class House extends Component {
    
    render(){
        return(
            <div className="houseListing">
                <img className="houseImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRunTqTksQhURdNfCgCvX3AHxgUPBPzmA3BHAgZxA-_XPWhR1jd"/>
                <div className="container1">
                <h3>Property Name:  </h3>
                <h3>Address:  </h3>
                <h3>City:  </h3>
                <h3>State: </h3>
                <h3>Zip:  </h3>
                </div>
                <div className="container2">
                <h3> Monthly Mortgage:  </h3>
                <h3>Desired Rent:  </h3>
                </div>
            </div>
        )
    }
}