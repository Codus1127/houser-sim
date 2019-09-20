import React, { Component } from "react";
import House from './../House/House'
import { Link } from "react-router-dom";

//initial state
export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      houses: []
    };

  }

  render(){
      return(
      
          <div>
              <div className="dashContainer">
                  <h1>Dashboard</h1>
                  <Link to="/wizard/step1">
                  <button className="add">Add New Property</button>
                  </Link>
                  <hr></hr>
                  <h2>Home Listings</h2>
              <House />
              <House />
              </div>
          </div>
          
      )
  }
}