import "./Auth.css";
import React from 'react'
import axios from 'axios';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: '',
                  password:''};

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
    const requestBody = { email: this.state.email,
                   password: this.state.password};
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
      <p className="Wishlist-Login-Caption">Sign into your Wishlist!</p>
      <form
      className="Login-Form" 
      onSubmit={this.handleSubmit}>
        <input type="text" 
               className="Login-Input"
               name="email"
               placeholder="Email"
               value={this.state.email}
               onChange={this.handleChange}
               />
        <input type="password" 
               className="Login-Input"
               name="password" 
               placeholder="Password"
               value={this.state.password}
               onChange={this.handleChange}/>
        <input 
        id="Login-Submit-Button"
        type="submit" value="Login"/>
      </form> 
    </div>
    );
  }
}

export default Login