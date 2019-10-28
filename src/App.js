import React from 'react';
import { Provider } from "react-redux";
import store from "./store";
import './App.css';
import LoginForm from './LoginForm';

const emplsList = [{
  "id":1,
  "name":"test1",
  "age" : "11",
  "gender":"male",
  "email" : "test1@gmail.com",
  "phoneNo" : "9415346313"
  },
  {
  "id" : 2,
  "name":"test2",
  "age" : "12",
  "gender":"male",
  "email" : "test2@gmail.com",
  "phoneNo" : "9415346314"
  },
  {
  "id":3,
  "name":"test3",
  
  "age" : "13",
  "gender":"male",
  "email" : "test3@gmail.com",
  "phoneNo" : "9415346315"
  },
  {
  "id":4,
  "name":"test4",
  "age" : "14",
  "gender":"male",
  "email" : "test4@gmail.com",
  "phoneNo" : "9415346316"
  },
  {
  "id":5,
  "name":"test5",
  "age" : "15",
  "gender":"male",
  "email" : "test5@gmail.com",
  "phoneNo" : "9415346317"
  },
  {
  "id":6,
  "name":"test6",
  "age" : "16",
  "gender":"male",
  "email" : "test6@gmail.com",
  "phoneNo" : "9415346318"}]

class App extends React.Component {

  constructor(props){
    super();
    this.formValidation = this.formValidation.bind(this);
    this.state = {isLoginPage : true}
  }
  formValidation= (values)=>{
    if(!(values.username === 'hruday@gmail.com' && values.password === 'hruday123'))
  {
    alert("Please try with correct username and password")
  }
  else{
    this.setState({isLoginPage:false})
  }
  }

  render(){
    console.log("test line");
    const { isLoginPage } = this.state;
    return <Provider store={store}>
    <div style={{ padding: 15 }}>
      {/* <h2>Login</h2> */}
      {isLoginPage ?
      <LoginForm validateFun={this.formValidation}/>
      :
      <div>
        <h1>Dashboard</h1>
        <table width="100%">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
          {emplsList.map(empl=>
          <tr>
            <td>{empl.id}</td>
            <td>{empl.name}</td>
            <td>{empl.age}</td>
            <td>{empl.gender}</td>
            <td>{empl.email}</td>
            <td>{empl.phoneNo}</td>
</tr>
)}
</table>        
      </div>
      }
    </div>
  </Provider>
  }
}

export default App;
