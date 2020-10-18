import "./MainPage.css";
import React from 'react'

class WishlistItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    
    event.preventDefault();
  }
  
  render() {
    return (
      <div className="Wishlist-Item-Container">
        <img className="Wishlist-Item-Image" src={this.props.image}/>
        <div className="Item-Description">
          <p className="Item-Title">
            <a className="Item-Link" href={this.props.link}
            target="_blank">
              {this.props.title}</a>
          </p>
          <p className="Item-Shipping-Status">Shipping: {this.props.shipping}</p>
          <p className="Item-Price">Price: {this.props.price}</p>
          <p className="Item-Id">ID: {this.props.item_id}</p>
        </div>
      </div>
    );
  }
}

export default WishlistItem