//Featch all the all names from the given api and search it 

import "./styles.css";
import React from "react";
import axios from "axios";
// GET https://jsonplaceholder.typicode.com/users
class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      value:''
    };
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      // console.log(data);
      this.setState({ users: response.data });
    });
  }

  handleSearch = ()=>
  {
    // var value = this.state.value;
    
    this.setState(prevState => ({users: this.state.value.toString() !==''?( prevState.users.filter((user)=>{
      if(user.name.toString().includes( this.state.value.toString())) return true;
    })):prevState.users}))
  }

  handleChange = (e)=>
  {
    this.setState({value:e.target.value})
  }

  render() {
    console.log(this.state.users);

    return (
      <>
      <input type="text" value ={this.state.value} onChange={this.handleChange}/>
      <button type="submit" onClick={this.handleSearch} >Search</button>
        {this.state.users.map((user) => {
          return <h1> {user.name} </h1>;
        })}
      </>
    );
  }
}

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Users />
    </div>
  );
}
