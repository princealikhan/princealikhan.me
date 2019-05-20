import { Component } from "react";
import Head from 'next/head'
import { withStyles } from '@material-ui/core/styles';
import cx from 'classnames';
import { workData } from "../src/data/work";

const styles = theme => ({
    container: {
        padding: theme.spacing.unit * 3,
    },
    mobileView: {
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        },
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '160px',
        backgroundPosition: 'right -12px bottom -18px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '50%',
        padding: '0.625em'
    }
});


class Work extends Component {

    state = {
        projects: []
    }

    componentDidMount(){
        this.setState({
            projects: workData.professional.concat(workData.openSource)
        })
    }

    render() {

        const { children, classes, theme } = this.props;
        const { projects } = this.state;

        return (
            <>
                <Head>
                    <title>Prince Ali Khan | Work</title>
                </Head>

                <div className={ cx('is-row', {
                    [classes.container]: true
                })}>
                    <div className={cx('is-col-xs-12', { 'is-col-sm-12': true, 'is-col-md-12': true, 'is-col-lg-12': true })}>
                        <div style={{ textAlign: 'center',marginTop: '5%'}}>
                            <button style={{ marginRight: 8 }} className={"ui button outline danger is-text--bold	 ripple"}>All</button>
                            <button style={{ marginRight: 8 }} className={"ui button outline danger ripple"}>Professional</button>
                            <button className={"ui button outline danger ripple"}>Open Source</button>
                        </div>
                    </div>
                </div>

                {/* Works */}
                <div className={ cx('is-row', {
                    [classes.container]: true
                })} style={{marginTop: '5%'}}>
                    {
                        projects.map((project, index) => (
                            <div key={index} className={cx('is-col-xs-12', { 'is-col-sm-6': true, 'is-col-md-4': true, 'is-col-lg-3': true })}>
                                <div className={cx('ui card')}>
                                    <div className={
                                        cx('gradient linear with shadow has-no--padding', { [project.style.color]: true })} 
                                        style={{ flexDirection: 'column', alignItems: 'inherit'}}>
                                        <div className={classes.cardContent} style={{ backgroundImage: `url(${project.cornerBanner})` }}>
                                            <div style={{textAlign: 'right'}}>
                                                <img src={project.orgLogo} />
                                            </div>
                                            <div>
                                                <h3 className={cx('has-no--margin is-text--bolder')}>{ project.title }</h3>
                                                <h5 className={cx('has-no--margin is-text--bolder')}>{ project.shortDesc }</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            </div> 
                        ))
                    }
                </div>
            </>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Work);
