import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import firebase from 'firebase';
import { Container } from '@material-ui/core';
import { useAlert } from 'react-alert';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    title: {
        marginBottom: 40
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
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 20
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

}));

export function LoginComponent(props) {
    const classes = useStyles();
    const alert = useAlert();
    const [email, setEmail] = useState('sherstnev-serzh@mail.ru');
    const [password, setPassword] = useState('13031989');

    function logIn(e) {
        e.preventDefault();
        alert.show("Hello")
    }

    return (

        <div className={classes.root}>
            <div className={classes.formContainer}>
                <Typography className={classes.title} component="h1" variant="h5">
                    Sign in
                </Typography>
                <Container className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        value={email}
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        value={password}
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={logIn}
                    >
                        Sign In
                    </Button>

                </Container>
            </div>
            
        </div>

    );
}