import React from 'react';
import Home from '~/app/containers/Home';

class Index extends React.Component {
  static async getInitialProps(context) {
    const { store, req, isServer, res, query } = context;

    return {
      isServer,
      query
    };
  }

  render() {
    return <Home {...this.props} />;
  }
}

export default Index;
