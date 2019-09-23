import React, { Component } from "react";
import House from './../House/House'
import { Link } from "react-router-dom";
import axios from"axios"

//initial state
export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      houses: []
    };
    
    this.deleteHouses = this.deleteHouses.bind(this)
  }

  componentDidMount() {
    axios.get("/api/houses").then(res => {
      this.setState({
        houses: res.data
      });
    });
  }
//gets the houses and connects it to endpoint
  getHouses() {
    axios.get("/api/houses").then(res => {
      this.setState({
        houses: res.data
      });
    });
  }

  deleteHouses(id){
    // console.log('any')
    axios.delete(`/api/houses/${id}`).then(res => {
      this.setState({
        houses:res.data
      })
    })
  }

  render(){
    {
      var allHouses = this.state.houses.map(ele => (
        <div key={ele.id}>
          <House ele={ele} remove={this.deleteHouses} />
        </div>
      ));
    }
      return(
      
          <div>
              <div className="dashContainer">
                  <h1>Dashboard</h1>
                  <Link to="/wizard/step1">
                  <button className="add">Add New Property</button>
                  </Link>
                  <hr></hr>
                  <h2>Home Listings</h2>
                {allHouses}
              </div>
          </div>
          
      )
  }
}