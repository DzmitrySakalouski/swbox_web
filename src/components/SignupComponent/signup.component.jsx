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

export function SignUpComponent(props) {
    const classes = useStyles();
    const alert = useAlert()
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function logIn(e) {
        e.preventDefault();
        if (!validateForm()) {
            console.log(validateForm())
            return;
        } else {
            signIn(email, password);
        }
    }

    const signIn = (email, password) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(result => {
            var user = firebase.auth().currentUser;
            user.updateProfile({
                displayName: username
            }).then(() => {
                alert.success("Регистрация прошла успешно")
            });
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert.error(`${errorCode}: ${errorMessage}`);
        });
    }

    const validateForm = () => {
        return [validateConfirmPassword(), validateFields(), validatePasswordLength()].every(Boolean);
    }

    const validatePasswordLength = () => {
        if (password.length < 6) {
            alert.error("Пароль меньше 6ти символов");
            setPassword("");
        }
        return password.length > 6;
    }

    const validateConfirmPassword = () => {
        if (confirmPassword !== password) {
            alert.error("Пароли не совпадают");
            setPassword("");
            setConfirmPassword("");
        }
        return confirmPassword === password;
    }

    const validateFields = () => {
        const conditions = [username, email, password];
        if (!conditions.every(Boolean)) {
            alert.error("Не все поля заполнены");
        }
        return conditions.every(Boolean);
    }

    return (
        <div className={classes.root}>
            <div className={classes.formContainer}>
                <Typography className={classes.title} component="h1" variant="h5">
                    Регистрация
                </Typography>
                <Container className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        value={username}
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Имя"
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
                        label="Пароль"
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
                        label="Подтвердить пароль"
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
                        Зарегестрироваться
                    </Button>

                </Container>
            </div>
            
        </div>

    );
}