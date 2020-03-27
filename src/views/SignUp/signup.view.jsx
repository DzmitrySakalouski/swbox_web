import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import firebase from 'firebase';
import Collapse from '@material-ui/core/Collapse';
import { LoginComponent, SignUpComponent } from '../../components';

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://happymag.tv/wp-content/uploads/2018/08/WACKEN.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    bottomActionContainer: {
        display: 'flex',
        marginBottom: 25,
        justifyContent: 'center'
    },
    label: {
        textDecoration: "underline",
        cursor: "pointer"
    }
}));

export function SignUpView(props) {
    const classes = useStyles();
    const [loginMode, setLoginMode] = useState(true)

    const toggleSignIn = () => {
        setLoginMode(!loginMode);
    };

    const getLabelTitle = () => {
        return loginMode ? "Нет аккаунта? Зарегестрируйся!" : "Есть аккаунт? Войди!"
    }

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid className={classes.formContainer} item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                {/* {loginMode ?  */}
                    <Collapse in={loginMode}>
                        <LoginComponent />
                    </Collapse>
                    
                     <Collapse in={!loginMode}>
                        <SignUpComponent />
                     </Collapse>
                    {/* } */}
                <div className={classes.bottomActionContainer} onClick={toggleSignIn}>
                    <Typography className={classes.label}>{getLabelTitle()}</Typography>
                </div>
            </Grid>
        </Grid>
    );
}