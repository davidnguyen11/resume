import React from 'react';

function withLayout(Child) {
  class WrappedComponent extends React.Component {
    render() {
      return (
        <div>
          <Child {...this.props} />
        </div>
      );
    }
  }
  return WrappedComponent;
}

export default withLayout;
