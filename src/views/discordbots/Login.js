import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Copyright from '../../components/CopyRight';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh'
    },
    rightBox: {
        backgroundColor: '#121212',
        color: '#fff'
    },
    subText: {
        color: 'rgba(255, 255, 255, 0.7)'
    },
    image: {
        backgroundImage: 'url(https://images.unsplash.com/photo-1482784160316-6eb046863ece?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80)',
        backgroundRepeat: 'no-repeat',
        backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        margin: theme.spacing(1),
        height: '12%',
        width: '12%'
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}));

function Login () {
    let [userData, setUserData] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const res = await fetch('http://localhost:8080/api/userdata', {
            method: 'get',
            credentials: 'include'
        });
        setUserData(res.status === 404 ? null : await res.json());
    }

    const classes = useStyles();

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square className={classes.rightBox}>
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        Login with Discord
                    </Typography>
                    <Typography variant="body1" align="center" className={classes.subText}>
                        After clicking continue, you will be redirected to authorize with Discord.
                    </Typography>
                    <form className={classes.form} noValidate>
                        <Button type="submit" fullWidth color="primary" variant="contained" className={classes.submit} onClick={(e) => {
                            e.preventDefault();
                            window.location.href = userData === null ? 'https://discord.com/oauth2/authorize?client_id=560501397938896897&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fauth&response_type=code&scope=identify%20guilds' : '/dashboard/stats';
                        }}>
                            Continue
                        </Button>
                        <Box mt={5}>
                            <Copyright />
                        </Box>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}

export default Login;