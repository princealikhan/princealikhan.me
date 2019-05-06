import Document, { Head, Main, NextScript } from 'next/document';
const GOOGLE_ANALYTICS_ID = process.env.NODE_ENV === 'production' ? 'AAA' : 'BBB';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {

        const { canonical, pageContext, url } = this.props;
        const font = 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700';

        return (
            <html lang="en" dir="ltr">
                <Head>
                    <meta
                        name="viewport"
                        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
                    />

                    <link rel="shortcut icon" href="/static/logo.png" />
                    <link rel="stylesheet" href="/static/base.css" />
                    
            
                    <link rel="canonical" href={canonical} />
                    <link rel="stylesheet" href={font} />
                    {/*
                        Preconnect allows the browser to setup early connections before an HTTP request
                        is actually sent to the server.
                        This includes DNS lookups, TLS negotiations, TCP handshakes.
                    */}
                    <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="anonymous" />
                    
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
                                window.ga('create','${GOOGLE_ANALYTICS_ID}','auto');
                            `,
                        }}
                    />
                </body>
            </html>
        );
    }
}

export default MyDocument;