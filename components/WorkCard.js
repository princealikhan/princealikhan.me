import { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import cx from 'classnames';
import PropTypes from 'prop-types';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/CloseRounded';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';


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
    },
    technologies: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    technologiesImages:{
        maxHeight: 48,
        maxWidth: 48
    },
    closeButton: {
        position: 'absolute',
        right: 12,
        top: 12,
        color: theme.palette.grey[500],
    },
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
                aria-labelledby="work-card-dialog">
                
                {/* Card Title */}
                <DialogTitle>
                    {workData.title}
                    <IconButton aria-label="Close" className={classes.closeButton} onClick={this.handleClose}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>

                {/* Card Content */}
                <DialogContent>
                    <Typography gutterBottom>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                    facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
                    at eros.
                    </Typography>
                    <Typography gutterBottom>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                    lacus vel augue laoreet rutrum faucibus dolor auctor.
                    </Typography>
                    <Typography gutterBottom>
                    Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                    scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                    auctor fringilla.
                    </Typography>
                    
                    {/* Technologies */}
                    <Typography variant="h6" style={{ marginTop: 18, fontSize: 16}}>Technologies Used</Typography>
                    <div className={classes.technologies}>
                        {
                            workData.technologies && workData.technologies.length > 0 ?
                            workData.technologies.map((technology, index) => (
                                <Tooltip key={index} title={technology.name} aria-label={technology.name}>
                                    <img className={classes.technologiesImages} aria-label={technology.name} src={technology.icon}/>
                                </Tooltip>
                            )):
                            ""
                        }
                    </div>
                </DialogContent>

                <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                Save changes
                </Button>
                </DialogActions>
            </Dialog>
        );

        return (
            <>
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
                                <h5 className={cx('has-no--margin')}>{workData.shortDesc}</h5>
                            </div>
                        </div>
                    </div>
                </div>
                {workDetails}
            </>
        );
    }

}

WorkCard.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    workData: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(WorkCard);
