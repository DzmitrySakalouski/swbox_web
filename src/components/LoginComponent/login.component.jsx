import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
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
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function logInHandler(e) {
        e.preventDefault();
        if (!validateFields()) {
            return
        } else {
            login(email, password)
        }
        
    }

    const login = (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            const user = firebase.auth().currentUser;
            alert.success("Вход выполнен успешно")
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
          });
    }

    const validateFields = () => {
        const areFieldsValid = [password, email].every(Boolean);
        if (!areFieldsValid) {
            alert.error("Поля не заполнены");
        }

        return areFieldsValid;
    }

    return (

        <div className={classes.root}>
            <div className={classes.formContainer}>
                <Typography className={classes.title} component="h1" variant="h5">
                    Войти
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
                        label="Пароль"
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
                        onClick={logInHandler}
                    >
                        Войти
                    </Button>

                </Container>
            </div>
            
        </div>

    );
}