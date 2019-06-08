import { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import cx from 'classnames';
import PropTypes from 'prop-types';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';



class WorkCard extends Component {

    
}

WorkCard.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    workData: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(WorkCard);
