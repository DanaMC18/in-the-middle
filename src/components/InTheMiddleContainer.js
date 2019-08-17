import React        from 'react';
import { connect }  from 'react-redux';
import Map          from './Map';

class InTheMiddleContainer extends React.Component {
  render() {
    return (
      <div>
        <h1>Split The Diff</h1>
        <Map />
      </div>
    )
  }
}

function mapStateToProps(storeState, componentProps) {
  return {};
}

export default connect(mapStateToProps)(InTheMiddleContainer);
