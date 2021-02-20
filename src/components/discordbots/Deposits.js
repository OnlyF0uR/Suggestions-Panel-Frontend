import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    depositContext: {
        flex: 1,
    },
});

export default function Deposits() {
    const classes = useStyles();
    return (
        <React.Fragment>
            Monthly donations
            <Typography component="p" variant="h4">
                $0,00
            </Typography>
            <Typography color="textSecondary" className={classes.depositContext}>
                on 20 Febuary, 2021
            </Typography>
            <div>
                <Link color="primary" href="/discordbots/donating">
                    Support us
                </Link>
            </div>
        </React.Fragment>
    );
}