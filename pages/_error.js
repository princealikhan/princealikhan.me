import React from 'react';
import Lottie from 'lottie-react-web'
import PageNotFound from '../static/animations/page-not-found.json';

class Error extends React.Component {

    static getInitialProps({ res, err }) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null;
        return { statusCode };
    }

    render() {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                height: 'calc(100vh - 28px)'
            }}>
                <Lottie
                    width="38%"
                    options={{
                        animationData: PageNotFound,
                    }}
                />
            </div>
        );
    }
}

export default Error;