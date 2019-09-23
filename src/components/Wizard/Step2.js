import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import store, { UPDATE_IMG } from "../../store"

export default class Step2 extends Component {
    constructor() {
        super()
        const reduxState = store.getState()
        this.state = {
            img: reduxState.img
        };
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    step2 = () => {
        store.dispatch({
            type: UPDATE_IMG,
            payload: this.state.img
        });
    };

    render() {
        return (
            <div className="App2">
            <div className="dashContainer2">
                <h1> Add New Listing</h1>
                <div className="inputContainer">
                    <form className="form">
                    <div>
                        Image URL: <br />
                        <input
                            placeholder="img"
                            type=""
                            name="img"
                            onChange={e => this.handleChange(e)}
                        />
                    </div>
            </form>

                </div>
                <Link to="/wizard/step1">
                    <button className="previous">Previous</button>
                </Link>
                <Link to="/wizard/step3">
                    <button onClick={this.step2} className="next">Next</button>
                </Link>

            </div>
            </div>
        )
    }
}