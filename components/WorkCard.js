import { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import cx from 'classnames';
import PropTypes from 'prop-types';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

const styles = theme => ({
    root: {
        display: 'flex',
    },
    cardContent: {
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '160px',
        backgroundPosition: 'right -24px bottom -24px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 110,
        padding: '0.625em'
    }
});

class WorkCard extends Component {

    state = {
        dialogOpen: false,
    };

    constructor(props) {  
        super(props);  
        this.handleClose = this.handleClose.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
    }

    componentDidMount() {
   
    }

    handleOpen() {
        this.setState({
            dialogOpen: true,
        })
    }

    handleClose() {
        this.setState({
            dialogOpen: false,
        })
    }

    render() {
        const { classes, theme, workData } = this.props;
        const { dialogOpen } = this.state;

        const workDetails = (
            <Dialog
                open={dialogOpen}
                fullScreen={false}
                aria-labelledby="simple-dialog-title">
                <DialogTitle>
                    {workData.title}
                </DialogTitle>
                <p>
                    Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
                </p>
            </Dialog>
        );

        return (
            <div className={cx('ui card')} style={{ marginBottom: 16 }} onClick={this.handleOpen}>
                <div className={
                    cx('gradient linear with shadow has-no--padding', { [workData.style.color]: true })}
                    style={{ flexDirection: 'column', alignItems: 'inherit' }}>
                    <div className={classes.cardContent} style={{ backgroundImage: `url(${workData.cornerBanner})` }}>
                        <div style={{ textAlign: 'right' }}>
                            <img src={workData.orgLogo} />
                        </div>
                        <div>
                            <h3 className={cx('has-no--margin is-text--bolder')}>{workData.title}</h3>
                            <h5 className={cx('has-no--margin is-text--bolder')}>{workData.shortDesc}</h5>
                        </div>
                    </div>
                </div>
                {workDetails}
            </div>
        );
    }

}

WorkCard.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    workData: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(WorkCard);
