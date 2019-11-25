import React from 'react';
import ReactStoreIndicator from 'react-score-indicator';
class UDIndicator extends React.Component {

  // state is for keeping control state before or after changes.
  state = {

    // the things you want to put in state.
    // text: this.props.text //un comment the line to use state insted props
  }


  render() {

      // These props are returned from PowerShell!
      // return <h1>{this.state.text}</h1> // un comment the line to render using value from state.

      return (
      <ReactStoreIndicator
        value={this.props.value}
          maxValue={this.props.maxValue}
          width={this.props.width}
          lineWidth={this.props.lineWidth}
          lineGap={this.props.lineGap}
      />
    )

  }
}

export default UDIndicator
