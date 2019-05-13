import { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import Link from "next/link";
import cx from 'classnames';
import Lottie from 'lottie-react-web'
import LottieLoader from '../static/animations/loader.json';

const styles = theme => ({
  mobileView: {
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    },
  },
  centerPane: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: 'calc(100vh - 48px)'
  },
});

class Index extends Component {

  render() {
    const { children, classes, theme } = this.props;
    return (
      <div className={'is-row'}>
        <div className={cx('is-col-xs-12', { 'is-col-sm-6': true, 'is-col-md-6': true, 'is-col-lg-6': true })}>
          <div className={classes.centerPane}>
            <Lottie
              options={{
                animationData: LottieLoader,
                loop: false,
              }}
            />
          </div>
        </div>
      
        <div className={cx('is-col-xs-12', { 'is-col-sm-6': true, 'is-col-md-6': true, 'is-col-lg-6': true, [classes.mobileView]: true})}>
          <div className={classes.centerPane}>
            B
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Index);
