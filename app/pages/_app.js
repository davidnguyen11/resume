import React from 'react';
import App, { Container } from 'next/app';
import withLayout from '~/app/hocs/withLayout';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
    };
  }

  render() {
    const { Component, pageProps } = this.props;
    const WrappedComponent = withLayout(Component);
    return (
      <Container>
        <WrappedComponent {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
