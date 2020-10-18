import "./MainPage.css";
import React from 'react'

class MainPage extends React.Component {
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
      <div className="MainPage-Container">
        <p>Main Page</p>
      </div>
    );
  }
}

export default MainPage