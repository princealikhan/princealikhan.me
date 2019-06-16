import { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import Head from 'next/head'
import cx from 'classnames';
import { siteData } from "../static/constant";
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';

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
  },
  aboutContainer:{
    marginTop: 48,
    marginRight: '10%',
    [theme.breakpoints.down('xs')]: {
      marginRight: 'inherit'
    },
  },
  stepIcon: {
    display: 'none'
  },
  stepLabel: {
    fontSize: 16,
    fontWeight: 'bold !important'
  }
  
});

class AboutPage extends Component {
  
  static getInitialProps() {
    const isServer = typeof window === "undefined";
    return { isServer };
  }


  render() {
    const { children, classes, theme } = this.props;

    const skills = (
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
    );

    const tools = (
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
    );

    const experiences = (
      <Stepper orientation="vertical">
        {
          siteData.experiences.map((experience, index) => (
            <Step active={true}>
              <StepLabel
                classes={
                  {
                    label: classes.stepLabel
                  }
                }             
                StepIconProps={{ classes: { text: classes.stepIcon } }}>
                { experience.desg }
              </StepLabel>
              <StepContent>
                <div style={{ display: 'flex'}}>
                  <div className={'has-color--white'} style={{ flex: 1, marginRight: 24}}>
                    { experience.description }
                  </div>
                  <div>
                    { experience.logo }
                  </div>
                </div>
              </StepContent>
            </Step> 
          ))
        }
      </Stepper>
    );

    return (
      <div className={ cx('is-row', {
        [classes.container]: true
      })}>
        <Head>
          <title>Prince Ali Khan | About</title>
        </Head>
        
        {/* Left Pane */}
        <div className={cx('is-col-xs-12', { 'is-col-sm-6': true, 'is-col-md-8': true, 'is-col-lg-8': true })}>
          <div className={classes.container}>
            <div className={classes.aboutContainer}> 
              
              {/* Introduction */}
              <h1 style={{ marginBottom: 0}} className={'has-color--yellow has-font-weight--bold'}>
                About 🤴
              </h1>
              <p className={'has-color--white'} style={{fontSize: '16px'}}>
                I'm an enthusiastic web developer, currently dealing with RoundGlass Reach and sometimes play with servers, surrounded with awesome people who build awesomesauce product - when I am not baking code then I am grabbing the beer with my friend.
              </p>
              
              {/* Experiences */}
              <h3 className={'has-color--yellow has-font-weight--bold'}>
              Work Experience
              </h3>
              { experiences }
            
            </div>
          </div>  
        </div>

        {/* Right Pane */}
        <div className={cx('is-col-xs-12', { 'is-col-sm-6': true, 'is-col-md-4': true, 'is-col-lg-4': true, [classes.mobileView]: true})}>
          <div className={classes.container}>
            
            {/* Get tools */}
            { tools }

            {/* Get Skills */}
            { skills }
            
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(AboutPage);
