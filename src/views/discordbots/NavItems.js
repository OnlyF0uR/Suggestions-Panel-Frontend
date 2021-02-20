import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';

import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import AnnouncementIcon from '@material-ui/icons/Announcement';

import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';

import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ChatIcon from '@material-ui/icons/Chat';

export default function NavItems () {
    return (
        <>
            {statistics}
            <Divider />
            {suggestions}
            <Divider />
            {codedsnow}
        </>
    )
}

const statistics = (
    <div>
        <ListItem button onClick={event => {
            event.preventDefault();
            window.location.href = '/discordbots/stats';
        }}>
            <ListItemIcon>
                <TrendingUpIcon />
            </ListItemIcon>
            <ListItemText primary="Stats" />
        </ListItem>
        <ListItem button onClick={event => {
            event.preventDefault();
            window.location.href = '/discordbots/status';
        }}>
            <ListItemIcon>
                <AnnouncementIcon />
            </ListItemIcon>
            <ListItemText primary="Status" />
        </ListItem>
    </div>
)

const suggestions = (
    <div>
        <ListSubheader inset>Suggestions</ListSubheader>
        <ListItem button onClick={event => {
            event.preventDefault();
            window.location.href = '/discordbots/suggestions/overview';
        }}>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Overview" />
        </ListItem>
        <ListItem button onClick={event => {
            event.preventDefault();
            window.location.href = '/discordbots/suggestions/settings';
        }}>
            <ListItemIcon>
                <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
        </ListItem>
    </div>
);

const codedsnow = (
    <div>
        <ListSubheader inset>CodedSnow</ListSubheader>
        <ListItem button onClick={event => {
            event.preventDefault();
            window.location = '/discordbots/donating';
        }}>
            <ListItemIcon>
                <MonetizationOnIcon />
            </ListItemIcon>
            <ListItemText primary="Donating" />
        </ListItem>
        <ListItem button onClick={event => {
            event.preventDefault();
            window.location = 'https://discord.gg/3SYg3M5';
        }}>
            <ListItemIcon>
                <ChatIcon />
            </ListItemIcon>
            <ListItemText primary="Discord server" />
        </ListItem>
    </div>
);