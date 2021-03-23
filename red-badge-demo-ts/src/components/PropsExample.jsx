import React, { Component } from 'react';

class PropsExample extends Component {
  render() {
    // Destructuring props
    const { name, business } = this.props;
    return (
      <div>
        {/* {this.props.name} is the founder of {this.props.business} */}
        {name} is the founder of {business}
      </div>
    );
  }
}

export default PropsExample;

// Bare bones CLASS Component WITHOUT STATE
