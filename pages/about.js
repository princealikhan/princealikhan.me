import { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import Head from 'next/head'
import cx from 'classnames';
import { siteData } from "../static/constant";
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  container: {
      padding: theme.spacing.unit * 3,
  },
  mobileView: {
      [theme.breakpoints.down('xs')]: {
          marginTop: 24
      },
  },
  chip: {
    color: '#ffb944',
    fontWeight: 'bold',
    marginBottom: 8,
    marginRight: 8
  }
});

class AboutPage extends Component {
  
  static getInitialProps() {
    const isServer = typeof window === "undefined";
    return { isServer };
  }

  render() {
    const { children, classes, theme } = this.props;

    return (
      <div className={ cx('is-row', {
        [classes.container]: true
      })}>
        <Head>
          <title>Prince Ali Khan | About</title>
        </Head>
        <div className={cx('is-col-xs-12', { 'is-col-sm-6': true, 'is-col-md-8': true, 'is-col-lg-8': true })}>
          <div className={classes.container}>
            <div id="about" style={{ marginTop: 48}}> 
              <h1 style={{ marginBottom: 0}} className={'has-color--yellow has-font-weight--bold'}>
                About 🤴
              </h1>
              <div className={'has-color--white'} style={{fontSize: '16px'}}>
              I'm an enthusiastic web developer --- currently dealing with backed of zoojoo.be and sometimes play with servers ---surrounded with awesome people who build awesomesauce product - when I am not baking <b>code</b> then I am grabbing the beer with my friend.


              </div>
              
            </div>
          </div>  
        </div>
        <div className={cx('is-col-xs-12', { 'is-col-sm-6': true, 'is-col-md-4': true, 'is-col-lg-4': true, [classes.mobileView]: true})}>
          <div className={classes.container}>
            <div id="skills" style={{ marginTop: 48}}>
              <h3 style={{ marginBottom: 0}} className={'has-color--white has-font-weight--bold'}>
                Programming Languages
              </h3>
              <Divider style={{ marginTop:8,marginBottom: 12}}/>
              {
                siteData.languages.map((language, index) => (
                    <Chip 
                      key={index}
                      color="secondary" 
                      avatar={<Avatar alt={language.technology} src={language.icon} />}
                      label={language.technology}
                      className={classes.chip}
                    />
                ))
              }
            </div>

            <div id="tools" style={{ marginTop: 48}}>
              <h3 style={{ marginBottom: 0}} className={'has-color--white has-font-weight--bold'}>
                Tools & Frameworks
              </h3>
              <Divider style={{ marginTop:8,marginBottom: 12}}/>
              {
                siteData.tools.map((tool, index) => (
                    <Chip 
                      key={index}
                      color="secondary" 
                      avatar={<Avatar alt={tool.technology} src={tool.icon} />}
                      label={tool.technology}
                      className={classes.chip}
                    />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(AboutPage);
