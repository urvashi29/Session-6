import React, { Component } from "react";

// App is class-component
class App extends Component {
  state = {
    firstName: 'alina',
    age: 30,
    designation: 'developer',
    arr: [89, 78, 56],
    employeeData: [{}, {}, {}]
  }

  handleClick = () => {
    // to update state this.setState()
    this.setState({
      age: 35,
      designation: 'engineer'
    });
  }

  //lifecycle 
  render() {
    return (
      //jsx
      // this refering to App
      <div>
        Hello!
        My name is {this.state.firstName} and age is {this.state.age}, working as a {this.state.designation}
        <button onClick={this.handleClick}>Update</button>

        {this.state.arr.map((info) => {
          return (
            <div>
              {info}
            </div>
          )
        })}

      </div>
    )
  }

}

export default App;

// diffing algorithm
// Recoincialation process

{/* <button onclick="add()"></button> */ }


// class Shape {
//   constructor (id) {
//     this.id = id;
//   }

//   displayId() {
//     console.log(this.id);
//   }
// }

// npm i