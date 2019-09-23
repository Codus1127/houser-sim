import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import store, {
    UPDATE_NAME,
    UPDATE_ADDRESS,
    UPDATE_CITY,
    UPDATE_STATE,
    UPDATE_ZIP
} from '../../store'

export default class Step1 extends Component {
    constructor() {
        super()
        const reduxState = store.getState()
        this.state = {
            name: reduxState.name,
            address: reduxState.address,
            city: reduxState.city,
            state: reduxState.state,
            zip: reduxState.zip
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    step1 = () => {
        store.dispatch({
            type: UPDATE_NAME,
            payload: this.state.name
        })
        store.dispatch({
            type: UPDATE_ADDRESS,
            payload: this.state.address
        });
        store.dispatch({
            type: UPDATE_CITY,
            payload: this.state.city
        });
        store.dispatch({
            type: UPDATE_STATE,
            payload: this.state.state
        });
        store.dispatch({
            type: UPDATE_ZIP,
            payload: this.state.zip
        });
    }

    render() {
        return (
            <div className="App2">
            <div className="dashContainer2">
                <h1> Add New Listing</h1>
                <div className="inputContainer">
                    <form className="form" action="step1">
                        <div>
                            Name: <br/>
                             <input
                                type="text"
                                name="name"
                                onChange={e => this.handleChange(e)}
                            />
                        </div>
                        <div>
                            Address:<br/>
                             <input
                                type="text"
                                name="address"
                                onChange={e => this.handleChange(e)}
                            />
                        </div>
                        <div>
                            City: <br/>
                             <input
                                type="text"
                                name="city"
                                onChange={e => this.handleChange(e)}
                            />
                        </div>
                        <div>
                            State: <br/>
                            <input
                                type="text"
                                name="state"
                                onChange={e => this.handleChange(e)}
                            />
                        </div>
                        <div>
                            Zip: <br/>
                            <input
                                type="text"
                                name="zip"
                                onChange={e => this.handleChange(e)}
                            />
                        </div>
                    </form>
                <Link to="/wizard/step2">
                    <button onClick={this.step1} className="next">Next</button>
                </Link>
                </div>


            </div>
            </div>
        )
    }
}