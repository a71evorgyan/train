import React, { Component } from 'react';
import data from '../data.json';
import '../Stylesheets/App.css';
 
class App extends Component {

state = {
  userInfo: {},  
}

clickHandler(id) {
  let result = data.find(user => user.userId === id);
  this.setState({
      userInfo: result,
  });
 
}

render() {
  const {userInfo} = this.state; 
  const users = data.map((elem) => 
    <div 
        style={{margin: '10px', cursor: 'pointer'}}
        onClick={this.clickHandler.bind(this, elem.userId)}
        data-user-id={elem.userId}
        key={elem.userId}>{elem.firstName} {elem.lastName}
    </div>);

  return(
      <div>
          <div style={{float: 'left', width: '30%'}}>
              {users}
          </div>

          <div>  
              {userInfo.userId ? 
                <div style={{float: 'left'}}>
                    <div>First Name: {userInfo.firstName}</div>
                    <div>Last Name: {userInfo.lastName}</div>
                    <div>Region: {userInfo.region}</div>
                    <div>Phone Number: {userInfo.phoneNumber}</div>
                    <div>Email Address: {userInfo.emailAddress}</div>
                    <div>Job Title Name: {userInfo.jobTitleName}</div>
                    <div>Preferred Full Name: {userInfo.preferredFullName}</div>
                </div>
                : null
            }
          </div>
      </div>
  )
}
}

export default App;
