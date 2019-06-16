import { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import cx from 'classnames';
// import Map from "../components/Map";

const styles = theme => ({
  container: {
    padding: theme.spacing.unit * 3,
  },
  mobileView: {
    [
      theme.breakpoints.down('xs')
    ]: {
      display: 'none'
    },
  },
  centerPane: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: 'calc(100vh - 48px)',
    fontSize: '3em',
    padding: '1em',
    [
      theme.breakpoints.down('sm')
    ]: {
      height: 'calc(100vh - 72px)',
    },
  },
  map: {
    height: '100vh',
    opacity: '0.5'
  }
});

class Contact extends Component {
    
    state = {
        name: '',
        email: '',
        message: '',
    };

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });

        this.setState({
          mailToString: 'mailto:princealikhan08@gmail.com?subject=Contact Us Form Website By ' + this.state.name + '&body=' + this.state.message
        })
    };

    render() {
        const { children, classes, theme } = this.props;
        return (
        <div className={'is-row'}>
          <div className={cx('is-col-xs-12', { 'is-col-sm-6': true, 'is-col-md-6': true, 'is-col-lg-6': true })}>
            <div className={cx(classes.centerPane, {[classes.container]: true })} >
                <div className={'has-color--yellow has-font-weight--bold'}>
                  Contact Me
                </div>
                <div className={'has-color--white has-font-weight--bold'} style={{fontSize: '16px'}}>
                  Feel free to drop a message
                </div>
                    <div className={'is-row'}>
                        <div className={cx('is-col-xs-12', { 'is-col-sm-8': true, 'is-col-md-8': true, 'is-col-lg-8': true })}>
                            <TextField
                                label="Name"
                                value={this.state.name}
                                onChange={this.handleChange('name')}
                                margin="normal"
                                variant="outlined"
                            />
                        </div>
                      
                        <div className={cx('is-col-xs-12', { 'is-col-sm-8': true, 'is-col-md-8': true, 'is-col-lg-8': true })}>
                            <TextField
                                multiline
                                rows="4"
                                label="Message"
                                value={this.state.message}
                                onChange={this.handleChange('message')}
                                margin="normal"
                                variant="outlined"
                            />
                        </div>
                    </div>  
                    <div className={'is-row'}>

                      <div className={cx('is-col-xs-12', { 'is-col-sm-4': true, 'is-col-md-4': true, 'is-col-lg-4': true })}>
                          <a href={this.state.mailToString} className={'ui button outline danger'} style={{marginTop: '16px', textAlign: 'center'}}>Send</a>
                      </div>
                      
                    </div>
            </div>
            </div>
        
            <div className={cx('is-col-xs-12', { 'is-col-sm-6': true, 'is-col-md-6': true, 'is-col-lg-6': true, [classes.mobileView]: true})}>
              <div className={classes.map}>
                {/* <Map/> */}
              </div>
            </div>
        </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Contact);
