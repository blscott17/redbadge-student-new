//Create a class component based on the functionalProps.jsx file
//Keep the usage of destructuring props in this challenge.
import React, { Component } from "react";
import { Alert, Container } from "reactstrap";

// const FunctionalProps = (props) => {
class ClassComponentProps extends Component {
  render() {
    // const { numbers } = props;
    const { numbers } = this.props;
    // function displayAlerts() {
    const displayAlerts = () =>
    // return numbers.map((num, index) => (
      numbers.map((num, index) => (
        <Alert key={index} color={num % 2 === 0 ? "success" : "danger"}>
          The number is {num}{" "}
        </Alert>
      ));
    // } end of function displayAlerts in Func Component
    return (
      <Container>
        <h3>From the Class-ComponentProps</h3>
        {displayAlerts()}
      </Container>
    );
  }
}

export default ClassComponentProps;

// // import React from 'react';
// import { Alert, Container } from 'reactstrap';
// import React, { Component } from 'react';

// // const ClassComponentProps = (props) => {
// class ClassComponentProps extends Component {
//   // const { numbers } = props; WHY DOES THIS NOW HAVE to BE INSIDE OF displayAlerts?
//   // function displayAlerts() {
//   displayAlerts() {
//     const { numbers } = this.props;
//     return numbers.map((num, index) => (
//       <Alert key={index} color={num % 2 === 0 ? 'success' : 'danger'}>
//         The number is {num}{' '}
//       </Alert>
//     ));
//   }
//   render() {
//     return (
//       <Container>
//         <h3>From the Class Component Props</h3>
//         {/* {displayAlerts()} */}
//         {this.displayAlerts()}
//       </Container>
//     );
//   }
// }

// export default ClassComponentProps;

// Create a class component based on the functionalProps.jsx file
// Keep the usage of destructuring props in this challenge.
// src\components\ClassComponentProps.jsx
//   Line 21:10:  'displayAlerts' is not defined  no-undef

// Search for the keywords to learn more about each error.
// NOTE: To fix the error on line 21, Remember to add "this." before method calls in your jsx.