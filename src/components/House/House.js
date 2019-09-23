import React, {Component} from 'react'

export default class House extends Component {
    
    render(){
        console.log(this.props.ele)
        return(
            <div className="houseListing">
                <button className="delete" onClick={(id) => this.props.remove(this.props.ele.id)}>X</button>
                <img className="houseImg" src={this.props.ele.img} alt="" />
                <div className="container1">
                <h3>NAME:  {this.props.ele.name}  </h3>
                <h3>ADDRESS:   {this.props.ele.address} </h3>
                <h3>CITY:   {this.props.ele.city} </h3>
                <h3>STATE:   {this.props.ele.state} </h3>
                <h3>ZIP:   {this.props.ele.zip} </h3>
                </div>
                <div className="container2">
                <h3>MONTHLY MORTGAGE:   ${this.props.ele.mortgage}  </h3>
                <h3>RENT:  ${this.props.ele.rent_amount}  </h3>
                </div>
            </div>
        )
    }
}