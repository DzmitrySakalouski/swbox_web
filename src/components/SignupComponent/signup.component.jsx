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

export function SignUpComponent(props) {
    const classes = useStyles();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function logIn(e) {
        e.preventDefault();
        // firebase.auth().signInWithEmailAndPassword(email, password)
        //     .then(res => {
        //         props.history.push('/');
        //     })
        //     .catch(err => console.log(console.log(err)));
    }

    const validateForm = () => {
        if (password != confirmPassword) {
            return false;
        }


    }

    const validatePassword = () => {
        return password.length < 6;
    }

    return (

        <div className={classes.root}>
            <div className={classes.formContainer}>
                <Typography className={classes.title} component="h1" variant="h5">
                    Sign Up
                </Typography>
                <Container className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        value={username}
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Name"
                        name="username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
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
                    <TextField
                        variant="outlined"
                        value={confirmPassword}
                        margin="normal"
                        required
                        fullWidth
                        name="confirmPassword"
                        label="Confirm Password"
                        type="password"
                        id="confirmPassword"
                        autoComplete="current-password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={logIn}
                    >
                        Sign Up
                    </Button>

                </Container>
            </div>
            
        </div>

    );
}