import { Component } from "react";
import Head from 'next/head'
import { withStyles } from '@material-ui/core/styles';
import cx from 'classnames';
import WorkCard from '../components/WorkCard';
import { workData } from "../src/data/work";

const styles = theme => ({
    container: {
        padding: theme.spacing.unit * 3,
    },
    workArea: {
        marginRight: '8%',
        marginLeft: '8%',
        [theme.breakpoints.down('xs')]: {
            marginLeft: 'inherit',
            marginRight: 'inherit'
        },
    },
    mobileView: {
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        },
    }
});


class Work extends Component {

    
    state = {
        projects: [],
        active: ''
    }

    handleTypeToggle = (type) => {
        if(type === 'all'){
            this.setState({
                projects: workData.professional.concat(workData.openSource),
                active: 'all'
            })
        }else {
            this.setState({
                projects: workData[type],
                active: type
            })
        }
        
    }

    componentDidMount(){
        this.setState({
            projects: workData.professional.concat(workData.openSource),
            active: 'all'
        })
    }

    render() {

        const { children, classes, theme } = this.props;
        const { projects, active } = this.state;

        return (
            <section className={classes.workArea}>
                <Head>
                    <title>Prince Ali Khan | Work</title>
                </Head>

                <div className={ cx('is-row', {
                    [classes.container]: true
                })}>
                    <div className={cx('is-col-xs-12', { 'is-col-sm-12': true, 'is-col-md-12': true, 'is-col-lg-12': true })}>
                        <div style={{ textAlign: 'center',marginTop: '5%'}}>
                            <button 
                                onClick={this.handleTypeToggle.bind(this, 'all')} 
                                style={{ marginRight: 8 }}
                                className={cx('ui button danger is-text--bold ripple', { 'outline': active !== 'all' })}>
                                All
                            </button>
                            <button 
                                onClick={this.handleTypeToggle.bind(this, 'professional')} 
                                style={{ marginRight: 8 }} 
                                className={cx('ui button danger is-text--bold ripple', { 'outline': active !== 'professional' })}>
                                Professional
                            </button>
                            <button 
                                onClick={this.handleTypeToggle.bind(this, 'openSource')} 
                                className={cx('ui button danger ripple', { 'outline': active !== 'openSource' })}>
                                Open Source
                            </button>
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
                                 <WorkCard workData={ project }/>
                            </div> 
                        ))
                    }
                </div>
            </section>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Work);
