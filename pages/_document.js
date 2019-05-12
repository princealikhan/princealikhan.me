import React from 'react';
import PropTypes from 'prop-types';
import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';

class MyDocument extends Document {
  render() {
    const { pageContext } = this.props;
    const font = 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700';
    const { canonical } = this.props;

    return (
      <html lang="en" dir="ltr">
        <Head>
          <meta charSet="utf-8" />
          {/* Use minimum-scale=1 to enable GPU rasterization */}
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />

          {/* PWA primary color */}
          <meta name="theme-color" content={pageContext.theme.palette.primary.main} />
          <link rel="shortcut icon" href="/static/logo.png" />
          <link rel="stylesheet" href="/static/base.css" />

          <link rel="canonical" href={canonical} />

          <link rel="stylesheet" href={font} />
          <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="anonymous" />          
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = ctx => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  let pageContext;

  const GOOGLE_ANALYTICS_ID = process.env.NODE_ENV === 'production' ? 'AAA' : 'BBB';

  const page = ctx.renderPage(Component => {
    const WrappedComponent = props => {
      pageContext = props.pageContext;
      return <Component {...props} />;
    };

    WrappedComponent.propTypes = {
      pageContext: PropTypes.object.isRequired,
    };

    return WrappedComponent;
  });

  return {
    ...page,
    pageContext,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: (
      <React.Fragment>
        <script
          dangerouslySetInnerHTML={{
              __html: `
                  window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
                  window.ga('create','${GOOGLE_ANALYTICS_ID}','auto');
              `,
          }}
        />
        <style
          id="jss-server-side"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: pageContext.sheetsRegistry.toString() }}
        />
        {flush() || null}
      </React.Fragment>
    ),
  };
};

export default MyDocument;