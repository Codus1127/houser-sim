import React, {Component} from 'react'
import { Link } from 'react-router-dom'

export default class Step1 extends Component {
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
                 Property Name:   <input></input>
                </div>
                <div>
                 Address: <input></input>
                 </div>
                <div>
                 City:   <input></input>
                </div>
                <div>
                 State:   <input></input>
                </div>
                <div>
                 Zip:   <input></input>
                </div>
                </div>
                <Link to="/wizard/step2">
                    <button className="next">Next</button>
                </Link>
                

            </div>
        )
    }
}