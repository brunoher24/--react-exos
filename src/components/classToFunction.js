// import React, { useState } from "react";

// class Square extends React.Component {
//     constructor(props) {
//         super(props);
      
//         this.state = {
//             value: ""      
//         };
//     }

//     buttonClicked() {
//         alert(this.props.msg)
//     }
  
//     render() {
//         return (
//             <button className="square" onClick={() => {this.buttonClicked()}}>
//             {this.props.value}
//             </button>
//         );
//     }
//   }


//   function Square(props) {
//     const [value, setValue] = useState(null);

//     const buttonClicked = () => {
//         alert(props.msg);
//     }

//     return (
//         <button className="square" onClick={buttonClicked}>
//             {props.value}
//         </button>
//     );

//   }

//   export default Square;
