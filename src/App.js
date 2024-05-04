import React from 'react';
import {
  Button,
  TextField,
  Typography,
  Container,
  makeStyles,
  Card,
  CardContent,
  Avatar,
  Fade,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useForm from './useForm';
import useFormValidation from './useFormValidation';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    justifyContent: 'center',
    backgroundImage: 'linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6)',
  },
  card: {
    padding: theme.spacing(3),
    borderRadius: theme.spacing(1),
    boxShadow: '0px 3px 15px rgba(0,0,0,0.2)',
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

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Username is required';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  }
  return errors;
};

const LoginComponent = () => {
  const classes = useStyles();
  const { values, handleChange } = useForm({ username: '', password: '' });
  const { errors, isValid } = useFormValidation(values, validate);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValid) {
      alert(`Username: ${values.username}, Password: ${values.password}`);
    }
  };

  return (
    <div className={classes.root}>
      <Fade in timeout={1000}>
        <Card className={classes.card}>
          <CardContent>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                value={values.username}
                onChange={handleChange}
                error={!!errors.username}
                helperText={errors.username}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={values.password}
                onChange={handleChange}
                error={!!errors.password}
                helperText={errors.password}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                disabled={!isValid}
                backgroundColor="black"
              >
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </Fade>
    </div>
  );
};

export default LoginComponent;