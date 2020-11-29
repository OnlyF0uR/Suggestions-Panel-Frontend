import React, { Component, useEffect, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Copyright from '../components/CopyRight';
import NavItems from './listItems';
import Chart from '../components/Chart';
import Orders from '../components/Orders';

import { SuggestionStatus, DiscordApiStatus } from '../components/Status';
import Incidents from "../components/Incidents";
import Deposits from "../components/Deposits";
import Suggestions from "../components/Suggestions";
import Reports from "../components/Reports";
import Avatar from "@material-ui/core/Avatar";

const drawerWidth = 240;

function UserAvatar({ classes, userData }) {
    return (
        <Avatar className={classes} alt={userData.username} src={`https://cdn.discordapp.com/avatars/${userData.id}/${userData.avatar}.png?size=256`} />
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
    avatar: {
        height: '12%',
        width: '12%'
    }
}));

function Main(props) {
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
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute" className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        Dashboard
                    </Typography>
                    <IconButton>
                        <Badge>
                            {/* TODO: Fix this */}
                            <UserAvatar classes={classes.avatar} userData={userData}/>
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" classes={{
                paper: classes.drawerPaper,
            }}>
                <div className={classes.toolbarIcon} />
                <NavItems />
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        {props.children}
                    </Grid>
                    <Box pt={4}>
                        <Copyright />
                    </Box>
                </Container>
            </main>
        </div>
    );
}

export function Stats() {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <Main>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
                <Paper className={fixedHeightPaper}>
                    <Chart />
                </Paper>
            </Grid>
            {/* Recent Status */}
            <Grid item xs={12} md={4} lg={3}>
                <Paper className={fixedHeightPaper}>
                    <Deposits />
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <Orders />
                </Paper>
            </Grid>
        </Main>
    );
}

export function Status() {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <Main>
            <Grid item xs={12} md={4} lg={3}>
                <Paper className={fixedHeightPaper}>
                    <SuggestionStatus />
                </Paper>
            </Grid>
            {/* Recent Status */}
            <Grid item xs={12} md={4} lg={3}>
                <Paper className={fixedHeightPaper}>
                    <DiscordApiStatus />
                </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <Incidents />
                </Paper>
            </Grid>
        </Main>
    );
}

export function SuggestionsOverview() {
    const classes = useStyles();

    return (
        <Main>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <Suggestions />
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <Reports />
                </Paper>
            </Grid>
        </Main>
    );
}

export function SuggestionsSettings() {
    const classes = useStyles();

    return (
        <Main>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <p>Todo</p>
                </Paper>
            </Grid>
        </Main>
    );
}