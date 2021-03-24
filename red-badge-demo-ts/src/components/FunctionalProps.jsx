import React from "react";
import { Alert, Container } from "reactstrap";

const FunctionalProps = (props) => {
  const { numbers } = props;
  function displayAlerts() {
    return numbers.map((num, index) => (
      <Alert key={index} color={num % 2 === 0 ? "success" : "danger"}>
        The number is {num}{" "}
      </Alert>
    ));
  }

  return (
    <Container>
      <h3>From the Function Component</h3>
      {displayAlerts()} 
    </Container>
  );
};

export default FunctionalProps;
