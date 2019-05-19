import { Component } from "react";
import Link from "next/link";
import cx from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { siteData } from '../static/constant';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

const drawerWidth = 80;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [
      theme.breakpoints.up('sm')
    ]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
    justifyContent: 'space-between',
    background: '#0a0f14',
    borderRight: '1px solid #02070e'
  },
  menuButton: {
    margin: 20,
    position: 'absolute',
    [
      theme.breakpoints.up('sm')
    ]: {
      display: 'none',
    },
  },
  content: {
    flexGrow: 1,
    [
      theme.breakpoints.down('sm')
    ]: {
      marginTop: 24,
    },
  },
  mainNav: {
    marginTop: 18,
    marginBottom: 18,
    textAlign: 'center',
  },
  navHoverStyle:  {
    '&:hover': {
      color: '#FFB944'
    }
  },
  navActiveStyle: {
    color: '#FFB944'
  }
});

class MasterLayout extends Component {

  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };


  render() {
    const { children, classes, theme } = this.props;

    const drawerMenu = (
      <>
        {/* Primary Nav */}
        <div className={classes.mainNav}>
          {
            siteData.primaryMenu.map((menu, index) => (
              <div key={index} style={{ margin: 8, marginBottom: 14 }}>
                 <Link href={menu.path}>
                  <a aria-label={menu.title} 
                    className={cx(classes.navHoverStyle, {
                    [classes.navActiveStyle]: children.props.router.pathname === menu.path
                  })}>
                    <div>{ menu.icon }</div>
                    <div style={{ fontSize: 12 }}>{ menu.title }</div>
                  </a>
                </Link>
              </div>
            ))
          }
          
        </div>
        
        {/* Social Nav */}
        <div className={classes.mainNav}>
          {
            siteData.socialNav.map((menu, index) => (
              <div key={index} style={{ margin: 8 }}>

                <a href={menu.url} target="_blank" className={classes.navHoverStyle} >
                  <div>{ menu.icon }</div>
                </a>
              </div>
            ))
          }
        </div>
      </>
    );

    return (
      
      <section className={classes.root}>
        <MenuRoundedIcon 
          onClick={this.handleDrawerToggle}
          className={classes.menuButton}
          />
        
        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              anchor="left"
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}>
              { drawerMenu }
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawerMenu}
            </Drawer>
          </Hidden>
        </nav>

        {/* Pages Component Inject here */}
        <main className={classes.content}>
          {children}
        </main>
      </section>
    );
  }
  
}

MasterLayout.propTypes = {
  classes: PropTypes.object.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MasterLayout);
