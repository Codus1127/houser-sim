import React, {Component} from 'react'
import { Link } from 'react-router-dom'

export default class Step2 extends Component {
    constructor(){
        super()
    }

    render(){
        return(
            <div className="dashContainer">
                <h1> Add New Listing</h1>
                <Link to="/">
                    <button className="cancel">Cancel</button>
                </Link>
                <div className="inputContainer">
                <div>
                 Image URL:   <input></input>
                </div>
                
                </div>
                <Link to="/wizard/step1">
                    <button className="previous">Previous</button>
                </Link>
                <Link to="/wizard/step3">
                    <button className="next">Next</button>
                </Link>
                

            </div>
        )
    }
}