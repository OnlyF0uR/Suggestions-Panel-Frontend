import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles({
    depositContext: {
        flex: 1,
    },
});

const suggestionsInvite = 'https://discord.com/oauth2/authorize?client_id=566616056165302282&scope=bot&permissions=8';

export function SuggestionStatus() {
    const classes = useStyles();
    return (
        <React.Fragment>
            Suggestions
            <Typography component="p" variant="h4">
                Online
            </Typography>
            <Typography color="textSecondary" className={classes.depositContext}>
                on 15 March, 2019
            </Typography>
            <div>
                <Link color="primary" href={suggestionsInvite} onClick={event => {
                    event.preventDefault();
                    window.location = suggestionsInvite;
                }}>
                    View
                </Link>
            </div>
        </React.Fragment>
    );
}

export function DiscordApiStatus() {
    const classes = useStyles();
    return (
        <React.Fragment>
            Discord Api
            <Typography component="p" variant="h4">
                Online
            </Typography>
            <Typography color="textSecondary" className={classes.depositContext}>
                on 15 March, 2019
            </Typography>
            <div>
                <Link color="primary" href="https://discordstatus.com/" onClick={event => {
                    event.preventDefault();
                    window.location = 'https://discordstatus.com/';
                }}>
                    View
                </Link>
            </div>
        </React.Fragment>
    );
}