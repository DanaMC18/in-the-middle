import React        from 'react';
import { connect }  from 'react-redux';

class InTheMiddleContainer extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    )
  }
}

function mapStateToProps(storeState, componentProps) {
  return {};
}

export default connect(mapStateToProps)(InTheMiddleContainer);