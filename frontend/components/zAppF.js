// import React, {useState} from 'react'
// import axios from 'axios'

// // Suggested initial states
// const initialMessage = ''
// const initialEmail = ''
// const initialSteps = 0
// const initialIndex = 4 // the index the "B" is at

// export default function AppFunctional(props) {

//   const [index, setIndex] = useState(initialIndex)
//   const [steps, setSteps] = useState(initialSteps)
//   const [email, setEmail] = useState(initialEmail)
//   const [message, setMessage] = useState(initialMessage)
//   const [coordinates, setCoordinates] = useState({x:2, y:2})
//   // THE FOLLOWING HELPERS ARE JUST RECOMMENDATIONS.
//   // You can delete them and build your own logic from scratch.

//   function getXY() {
//     // It it not necessary to have a state to track the coordinates.
//     // It's enough to know what index the "B" is at, to be able to calculate them.
//     const x = (index % 3) 
//     const y = Math.floor(index / 3)
//     return {x, y}
//   }

//   function getXYMessage() {
//     // It it not necessary to have a state to track the "Coordinates (2, 2)" message for the user.
//     // You can use the `getXY` helper above to obtain the coordinates, and then `getXYMessage`
//     // returns the fully constructed string.
//     const {x, y} = getXY()
//     return `Coordinates (${x + 1}, ${y + 1})`
//   }

//   function reset() {
//     // Use this helper to reset all states to their initial values.
//     setMessage(initialMessage)
//     setEmail(initialEmail)
//     setSteps(initialSteps)
//     setIndex(initialIndex)
//     setCoordinates({x:2, y:2})
//   }

//   function getNextIndex(direction) {
//     // This helper takes a direction ("left", "up", etc) and calculates what the next index
//     // of the "B" would be. If the move is impossible because we are at the edge of the grid,
//     // this helper should return the current index unchanged.
//     const x = index % 3;
//     const y = Math.floor(index / 3);
//     switch (direction) {
//       case 'left': 
//         return x > 0 ? index - 1 : index;
//       case 'up': 
//         return y > 0 ? index - 3 : index;
//       case 'right' : 
//         return x < 2 ? index + 1 : index;
//       case 'down' :
//         return y < 2 ? index + 3 : index;
//       default: 
//         return index;
//     }
//   }

//   function move(evt) {
//     // This event handler can use the helper above to obtain a new index for the "B",
//     // and change any states accordingly.
//     const direction = evt.target.id
//     const nextIndex = getNextIndex(direction);
//     if (nextIndex !== index) {
//       setIndex(nextIndex);
//       setSteps(steps + 1);
//       setCoordinates(getXY(direction));
//     } else {
//       setMessage(`You can't go ${direction}`)
//     }
//   }

//   function onChange(evt) {
//     // You will need this to update the value of the input.
//     setEmail(evt.target.value)
//   }

//   function onSubmit(evt) {
//     // Use a POST request to send a payload to the server.
//     evt.preventDefault();
//     setMessage(`Email ${email} submitted`)
//     const {x, y} = getXY(evt)
//     axios.post('http://localhost:9000/api/result', {x:coordinates.x, y:coordinates.y, steps, email})
//     .then(res => {
//       setMessage(res.data.message)
//       setEmail(initialEmail)
//     })
//     .catch(err => {
//       //if (err.reponse && err.response.data && err.response.data.message) {
//       //set Message(`${err.response.data.message}`)
//       //} else {
//       //  setMessage('Ouch: an error occurred. Please try again.');
//       //}
//       const errorMessage = err.response ? err.response.data.message : 'Ouch: email is required';
//       setMessage(errorMessage)
//     })
//   }

//   return (
//     <div id="wrapper" className={props.className}>
//       <div className="info">
//         <h3 id="coordinates">{getXYMessage()}</h3>
//         <h3 id="steps">{`You moved ${steps} time${steps !== 1 ? 's' : ''}`}</h3>
//       </div>
//       <div id="grid">
//         {
//           [0, 1, 2, 3, 4, 5, 6, 7, 8].map(idx => (
//             <div key={idx} className={`square${idx === 4 ? ' active' : ''}`}>
//               {idx === index ? 'B' : null}
//             </div>
//           ))
//         }
//       </div>
//       <div className="info">
//         <h3 id="message"></h3>
//       </div>
//       <div id="keypad">
//         <button id="left" onClick={move}>LEFT</button>
//         <button id="up" onClick={move}>UP</button>
//         <button id="right" onClick={move}>RIGHT</button>
//         <button id="down" onClick={move}>DOWN</button>
//         <button id="reset" onClick={reset}>reset</button>
//       </div>
//       <form onSubmit={onSubmit}>
//         <input id="email" type="email" placeholder="type email" value={email} onChange={onChange}></input>
//         <input id="submit" type="submit"></input>
//       </form>
//     </div>
//   )
// }
