import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { makeStyles, Theme } from '@material-ui/core/styles';

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

interface Props {
    open: any,
    setOpen: any
}

const SnackBarUI:React.FC<Props> = ({ open, setOpen }) => {
    const classes = useStyles();

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    return (
        <div className={classes.root}>
            <Snackbar open={open} autoHideDuration={1500} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    Dados atualizados!
                </Alert>
            </Snackbar>
        </div>
    );

}

export default SnackBarUI;
