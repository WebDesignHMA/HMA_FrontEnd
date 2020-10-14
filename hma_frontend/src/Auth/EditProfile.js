import "./Auth.css";
import React from 'react'
import axios from 'axios';

//make a GET Request to load existing profile information in fields
class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
                  name:'',
                  email: '',
                  city:'',
                  interests: ''};

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
    console.log(this.state.email + " " + this.state.password);
    const requestBody = { name: this.state.name,
                          email: this.state.email,
                          city: this.state.password,
                          interests: this.state.interests};
    axios.post(`https://jsonplaceholder.typicode.com/users`, { requestBody })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    event.preventDefault();
  }

  render() {
    return (
      <div className="Login-Container">
      <p className="Wishlist-Login-Heading">WISHLIST</p>
      <p className="Wishlist-Login-Caption">
        Edit my Profile</p>
      <form
      className="Login-Form" 
      onSubmit={this.handleSubmit}>
         <input type="text" 
               className="Login-Input"
               name="name"
               placeholder="Name"
               value={this.state.name}
               onChange={this.handleChange}
               />
        <input type="text" 
               className="Login-Input"
               name="email"
               placeholder="Email"
               value={this.state.email}
               onChange={this.handleChange}
               />
        <input type="text" 
               className="Login-Input"
               name="city" 
               placeholder="City"
               value={this.state.city}
               onChange={this.handleChange}/>
        <input type="text" 
               className="Login-Input"
               name="interests" 
               placeholder="Interests"
               value={this.state.interests}
               onChange={this.handleChange}/>
        <input 
        id="Login-Submit-Button"
        type="submit" value="Update Profile"/>
      </form> 
    </div>
    );
  }
}

export default EditProfile