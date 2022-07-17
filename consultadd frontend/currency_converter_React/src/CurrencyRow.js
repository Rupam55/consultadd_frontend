import React from 'react'

class CurrencyRow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <h3> second component </h3>
        <h3> {this.props.ans} </h3>
      </div>
    )
  }

}

export default CurrencyRow;
