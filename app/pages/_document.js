import Document, { Head, Main, NextScript } from 'next/document';
import styles from '../styles';
import { APPLE_METAS_LINKS } from '~/app/utils/constants';

export default class ServerDocument extends Document {
  renderAppleMetas() {
    const { metas } = APPLE_METAS_LINKS;
    return metas.map((item, index) => <meta key={index} {...item} />);
  }

  renderAppleLinks() {
    const { links } = APPLE_METAS_LINKS;
    return links.map((item, index) => <link key={index} {...item} />);
  }

  render() {
    const env = `window.ENV = '${process.env.ENV || 'development'}';`;
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          <link rel="manifest" href="/static/manifest.json" />
          <link rel="shortcut icon" href="/static/img/favicon.ico" />
          <style dangerouslySetInnerHTML={{ __html: styles }} />
          {this.renderAppleMetas()}
          {this.renderAppleLinks()}
        </Head>
        <body className="custom_class">
          {this.props.customValue}
          <Main />
          <script dangerouslySetInnerHTML={{ __html: env }} />
          <NextScript />
        </body>
      </html>
    );
  }
}
