import "./MainPage.css";
import React from 'react'
import axios from 'axios';

class CreateWishlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '',
                  description:''};

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
    console.log(this.state.name + " " + this.state.description);
    const requestBody = { name: this.state.name,
                   description: this.state.description};
    axios.post(`https://jsonplaceholder.typicode.com/users`, { requestBody })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    event.preventDefault();
  }

  render() {
    return (
      <div className="Create-Wishlist-Container">
        <p className="Create-Wishlist-Heading">Create a new WISHLIST</p>
        <form
        className="Create-Wishlist-Form" 
        onSubmit={this.handleSubmit}>
          <input type="text" 
                className="Wishlist-Name-Input"
                name="name"
                placeholder="Name"
                value={this.state.name}
                onChange={this.handleChange}/>
          <input type="text" 
                className="Wishlist-Description"
                name="description" 
                placeholder="Short Description"
                value={this.state.description}
                onChange={this.handleChange}/>
          <input 
          id="Create-Wishlist-Button"
          type="submit" value="Create Wishlist"/>
        </form> 
    </div>
    );
  }
}

export default CreateWishlist
