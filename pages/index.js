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
    height: 'calc(100vh - 48px)',
    fontSize: '3em',
    padding: '1em'
  },
});

class Index extends Component {

  render() {
    const { children, classes, theme } = this.props;
    return (
      <div className={'is-row'}>
        <div className={cx('is-col-xs-12', { 'is-col-sm-6': true, 'is-col-md-6': true, 'is-col-lg-6': true })}>
          <div className={classes.centerPane}>
            <div className={'has-color--yellow has-font-weight--bold'} style={{ fontSize: '2em'}}>Hi,</div>
            <div className={'has-color--white has-font-weight--bold'}>I'm Prince,</div>
            <div className={'has-color--white has-font-weight--bold'}>Software Developer,</div>
            <h4 style={{ margin: 0}}>Based out of Bangalore</h4>
            <Link href={'/about'}>
              <a style={{width:120}}>
                <button className={'ui button outline danger'}>know more</button>
              </a>
            </Link>
          </div>
        </div>
      
        <div className={cx('is-col-xs-12', { 'is-col-sm-6': true, 'is-col-md-6': true, 'is-col-lg-6': true, [classes.mobileView]: true})}>
          <div className={classes.centerPane}>
            <Lottie
              options={{
                animationData: LottieLoader,
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Index);
