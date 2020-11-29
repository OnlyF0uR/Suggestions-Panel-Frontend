import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

// Generate Order Data
function createData(id, date, topic, description, status) {
    return { id, date, topic, description, status };
}

const rows = [
    createData(0, '16 Mar, 2019', 'Expected downtime', 'Updating servers', 'Ongoing'),
    createData(0, '15 Mar, 2019', 'Server crash', 'Server crash, investigating', 'Resolved'),
];

function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
    bold: {
      fontWeight: 'bold'
    },
    seeMore: {
        marginTop: theme.spacing(3),
    }
}));

export default function Incidents() {
    const classes = useStyles();
    return (
        <React.Fragment>
            Latest Incidents
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.bold}>Date</TableCell>
                        <TableCell className={classes.bold}>Topic</TableCell>
                        <TableCell className={classes.bold}>Description</TableCell>
                        <TableCell className={classes.bold} align="right">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.date}</TableCell>
                            <TableCell>{row.topic}</TableCell>
                            <TableCell>{row.description}</TableCell>
                            <TableCell align="right">{row.status}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className={classes.seeMore}>
                <Link color="primary" href="#" onClick={preventDefault}>
                    Report unlisted downtime
                </Link>
            </div>
        </React.Fragment>
    );
}