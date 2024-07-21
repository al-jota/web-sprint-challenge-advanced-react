// // ❗ OPTIONAL, not required to pass the sprint
// // ❗ OPTIONAL, not required to pass the sprint
// // ❗ OPTIONAL, not required to pass the sprint
// import React, { Component } from 'react';
// import axios from 'axios';

// // Suggested initial states
// const initialMessage = ''
// const initialEmail = ''
// const initialSteps = 0
// const initialIndex = 4 // the index the "B" is at

// class AppClass extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       message: initialMessage,
//       email: initialEmail,
//       steps: initialSteps,
//       index: initialIndex,
//     };
//   }

//   getXY = () => {
//     // It it not necessary to have a state to track the coordinates.
//     // It's enough to know what index the "B" is at, to be able to calculate them.
//     const x = (this.state.index % 3) + 1;
//     const y = (Math.floor(this.state.index / 3) + 1);
//     return { x, y };
//   };

//   getXYMessage = () => {
//     // It it not necessary to have a state to track the "Coordinates (2, 2)" message for the user.
//     // You can use the `getXY` helper above to obtain the coordinates, and then `getXYMessage`
//     // returns the fully constructed string.
//     const { x, y } = this.getXY();
//     return `Coordinates (${x}, ${y})`;
//   };

//   reset = () => {
//     // Use this helper to reset all states to their initial values.
//     this.setState({
//       message: initialMessage,
//       email: initialEmail,
//       steps: initialSteps,
//       index: initialIndex,
//     });
//   };

//   getNextIndex = (direction) => {
//     // This helper takes a direction ("left", "up", etc) and calculates what the next index
//     // of the "B" would be. If the move is impossible because we are at the edge of the grid,
//     // this helper should return the current index unchanged.
//     const { index } = this.state;
//     let newIndex = index;
//     if (direction === 'left' && index % 3 !==0) newIndex -= 1;
//     else if (direction === 'up' && index >= 3) newIndex -= 3;
//     else if (direction === 'right' && index % 3 !== 2) newIndex += 1;
//     else if (direction === 'down' && index <= 5) newIndex += 3;
//     return newIndex;
//   };

//   move = (evt) => {
//     // This event handler can use the helper above to obtain a new index for the "B",
//     // and change any states accordingly.
//     const newIndex = this.getNextIndex(evt.target.id);
//     if(newIndex !== this.state.index) {
//       this.setState({
//         index: newIndex,
//         steps: this.state.steps + 1,
//       });
//     }
//   };

//   onChange = (evt) => {
//     // You will need this to update the value of the input.
//     this.setState({ email: evt.target.value });
//   };

//   onSubmit = async (evt) => {
//     // Use a POST request to send a payload to the server.
//     evt.preventDefault();
//     const { x, y } = this.getXY();
//     try {
//       const response = await axios.post('http://localhost:9000/api/result', {
//         x,
//         y,
//         steps: this.state.steps,
//         email: this.state.email,
//       });
//       this.setState({ message: response.data.message });
//     } catch (error) {
//       this.setState({ message: error.response.data.message });
//     }
//   };

//   render() {
//     const { className } = this.props
//     return (
//       <div id="wrapper" className={className}>
//         <p>(This component is not required to pass the sprint)</p>
//         <div className="info">
//           <h3 id="coordinates">{this.getXYMessage()}</h3>
//           <h3 id="steps">You moved {this.state.steps} {this.state.steps === 1 ? 'time' : 'times'}</h3>
//         </div>
//         <div id="grid">
//           {
//             [0, 1, 2, 3, 4, 5, 6, 7, 8].map(idx => (
//               <div key={idx} className={`square${idx === this.state.index ? ' active' : ''}`}>
//                 {idx === this.state.index ? 'B' : null}
//               </div>
//             ))
//           }
//         </div>
//         <div className="info">
//           <h3 id="message">{this.state.message}</h3>
//         </div>
//         <div id="keypad">
//           <button id="left" onClick={this.move}>LEFT</button>
//           <button id="up" onClick={this.move}>UP</button>
//           <button id="right" onClick={this.move}>RIGHT</button>
//           <button id="down" onClick={this.move}>DOWN</button>
//           <button id="reset" onClick={this.reset}>reset</button>
//         </div>
//         <form onSubmit={this.onSubmit}>
//           <input 
//             id="email" 
//             type="email" 
//             placeholder="type email"
//             value={this.state.email}
//             onChange={this.onChange}
//             ></input>
//           <input id="submit" type="submit"></input>
//         </form>
//       </div>
//     );
//   }
// }

// export default AppClass;
