import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import store, { UPDATE_RENT_AMOUNT, UPDATE_MORTGAGE, CANCEL } from "../../store";
import axios from "axios";

export default class Step2 extends Component {
    constructor() {
        super()
        const reduxState = store.getState();

        this.state = {
            rentAmount: reduxState.rentAmount,
            mortgage: reduxState.mortgage
        };
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    getHouses = () => {
        axios.get("/api/houses").then(res => {
            this.setState({
                houses: res.data
            });
        });
    }
    step3 = () => {
        store.dispatch({
            type: UPDATE_RENT_AMOUNT,
            payload: this.state.rentAmount
        });
        store.dispatch({
            type: UPDATE_MORTGAGE,
            payload: this.state.mortgage
        });
        let reduxState = store.getState();
        axios.post("/api/houses", reduxState).then(res => {
            console.log("ok");
        });
        store.dispatch({
            type: CANCEL
        });
        this.getHouses()


    };

    goBack = () => {
        store.dispatch({
            type: UPDATE_RENT_AMOUNT,
            payload: this.state.amount
        });
        store.dispatch({
            type: UPDATE_MORTGAGE,
            payload: this.state.mortgage
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
                        Monthly Mortgage Amount: <br/>
                 <input
                            type=""
                            name="mortgage"
                            onChange={e => this.handleChange(e)}
                        />
                    </div>
                    <div>
                        Desired Monthly Rent: <br/>
                        <input
                            type=""
                            name="rentAmount"
                            onChange={e => this.handleChange(e)}
                        />
                    </div>
                </form>
                </div>
                <Link to="/wizard/step2">
                    <button onClick={this.goBack} className="previous">Previous</button>
                </Link>
                <Link to="/">
                    <button onClick={this.step3} className="complete">Complete</button>
                </Link>


            </div>
            </div>
        )
    }
}