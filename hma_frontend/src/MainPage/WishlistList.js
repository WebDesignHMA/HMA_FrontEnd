import "./MainPage.css";
import React from 'react'
import WishlistItem from './WishlistItem'

class WishlistList extends React.Component {
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

  // var mockItem =  {
  //   "item_id": "283886767773",
  //   "title": "DELL LATiTUDE LAPTOP WINDOWS 10 INTEL CORE 2 DUO DVD WiFi NOTEBOOK HD COMPUTER",
  //   "condition": null,
  //   "price": "$169.99",
  //   "shipping": "Free shipping",
  //   "link": "https://www.ebay.com/itm/283886767773",
  //   "image": "https://i.ebayimg.com/thumbs/images/g/-XAAAOSwD6FexcpY/s-l225.jpg"
  // };

  render() {
    return (
      <div className="Wishlist-List">
        <p className="Wishlist-Name">Tech WISHLIST</p>
        <WishlistItem 
          item_id="283886767773"
          title="DELL LATiTUDE LAPTOP WINDOWS 10 INTEL CORE 2 DUO DVD WiFi NOTEBOOK HD COMPUTER"
          condition="null"
          price="$169.99"
          shipping="Free shipping"
          link= "https://www.ebay.com/itm/283886767773"
          image= "https://i.ebayimg.com/thumbs/images/g/-XAAAOSwD6FexcpY/s-l225.jpg"
        />
         <WishlistItem 
          item_id="283886767773"
          title="DELL LATiTUDE LAPTOP WINDOWS 10 INTEL CORE 2 DUO DVD WiFi NOTEBOOK HD COMPUTER"
          condition="null"
          price="$169.99"
          shipping="Free shipping"
          link= "https://www.ebay.com/itm/283886767773"
          image= "https://i.ebayimg.com/thumbs/images/g/-XAAAOSwD6FexcpY/s-l225.jpg"
        />
         <WishlistItem 
          item_id="283886767773"
          title="DELL LATiTUDE LAPTOP WINDOWS 10 INTEL CORE 2 DUO DVD WiFi NOTEBOOK HD COMPUTER"
          condition="null"
          price="$169.99"
          shipping="Free shipping"
          link= "https://www.ebay.com/itm/283886767773"
          image= "https://i.ebayimg.com/thumbs/images/g/-XAAAOSwD6FexcpY/s-l225.jpg"
        />
      </div>
    );
  }
}

export default WishlistList