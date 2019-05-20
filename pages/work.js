import { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import Link from "next/link";
import cx from 'classnames';
import Head from 'next/head'

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';


const styles = theme => ({
    container: {
        padding: theme.spacing.unit * 3,
    },
    mobileView: {
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        },
    },
});

class Work extends Component {

    render() {
        const { children, classes, theme } = this.props;
        return (
            <>
            <Head>
                <title>Prince Ali Khan | Work</title>
            </Head>
            <div className={ cx('is-row', {
                [classes.container]: true
            }) }>
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
            }) } style={{marginTop: '5%'}}>
                <div className={cx('is-col-xs-12', { 'is-col-sm-6': true, 'is-col-md-4': true, 'is-col-lg-3': true })}>
                    <div className={cx('ui card' )}>
                        <div class={cx('cover-image')} style={{ '--bg-image': "url('https://picsum.photos/id/237/200/300')"}}>
                            <div>
                                <h3 class={cx('has-no--margin is-text--bolder')}> Lorem Ipsuem</h3>
                                <h5 class={cx('has-no--margin is-text--bolder')}> Secondary text</h5>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
               
            </>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Work);
