import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Copyright from '../../components/CopyRight';
import NavItems from './NavItems';
import Chart from '../../components/discordbots/Chart';
import Orders from '../../components/discordbots/Orders';

import { SuggestionStatus, DiscordApiStatus } from '../../components/discordbots/Status';
import Incidents from "../../components/discordbots/Incidents";
import Deposits from "../../components/discordbots/Deposits";
import Suggestions from "../../components/discordbots/suggestions/Suggestions";
import Reports from "../../components/discordbots/suggestions/Reports";
import Avatar from "@material-ui/core/Avatar";

const drawerWidth = 240;

function UserAvatar({ userData }) {
    return (
        <Avatar alt={userData.username} src={`https://cdn.discordapp.com/avatars/${userData.id}/${userData.avatar}.png?size=256`} />
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
    centerText: {
        textAlign: "center"
    },
    normalText: {
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
        fontSize: "1.02rem"
    },
    moveRight: {
        paddingLeft: theme.spacing(5)
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
                    <UserAvatar userData={userData}/>
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

// Discordbots part

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

    return (
        <Main>
            <Grid item xs={12} md={4} lg={3}>
                <Paper className={classes.paper}>
                    <SuggestionStatus />
                </Paper>
            </Grid>
            {/* Recent Status */}
            <Grid item xs={12} md={4} lg={3}>
                <Paper className={classes.paper}>
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

export function Donating() {
    const classes = useStyles();

    return (
        <Main>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <h1 className={classes.centerText}>Why consider donating?</h1>
                    <p className={classes.normalText}>Currently, CodedSnow is fully funded with donations. Besides that we also do not make any profit when it comes to our discordbots and other projects.
                        However it is not free to keep our projects up and running. In order to achieve this goal we are fully depended on donations. Without donations we will
                        be unable to continue with our projects including our discordbots. That is why donations are grealy appreciated and if you have the possibility and permission
                        to donate then we would like to ask you to consider it as it greatly helps our us to maintain our projects.
                    </p>
                    <h1 className={classes.centerText}>Perks and benefits</h1>
                    <p className={classes.normalText}>Perks and benifits will be coming soon!</p>
                    <h1 className={classes.centerText}>How to donate?</h1>
                    <p className={classes.normalText}>There are multiple ways of donating. For example you can make a payment using paypal but also using certain cryptocurrencies.
                        If you want to receive your perks then feel free to contact one of our staffmembers over on Discord before you donate. This is not neccessary when using paypal as long as you make sure
                        that your discord name + tag is included within the donation message.
                    </p>
                    <div className={classes.moveRight}>
                        <ul>
                            <li>
                                Paypal: <a href="https://www.paypal.com/paypalme/jerskisnow">https://www.paypal.com/paypalme/jerskisnow</a>
                            </li>
                            <li>
                                Bitcoin: 1KJxP4jgciYyAQghqVQoDeEHhR6vNFStAn
                            </li>
                            <li>
                                Patreon: x
                            </li>
                        </ul>
                    </div>
                </Paper>
            </Grid>
        </Main>
    );
}

// Suggestion part

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
                    <p>Coming Soon!</p>
                </Paper>
            </Grid>
        </Main>
    );
}