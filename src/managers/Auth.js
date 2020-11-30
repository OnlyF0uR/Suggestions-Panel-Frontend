import React, { Component } from 'react';
import Login from '../views/discordbots/Login';

export default function withAuth(ComponentToProtect) {
    return class extends Component {

        constructor() {
            super();
            this.state = {
                loading: true,
                redirect: false,
            };
        }

        async componentDidMount() {
            const res = await fetch('http://localhost:8080/api/userdata', {
                method: 'get',
                credentials: 'include'
            });

            if (res.status !== 404) {
                const userData = await res.json();
                this.setState({ loading: false, isLoggedIn: true, user: userData });
            } else {
                this.setState({ loading: false, isLoggedIn: false });
            }
        }


        render() {
            const { loading, isLoggedIn } = this.state;
            if (loading) {
                return null;
            }
            if (!isLoggedIn) {
                window.location.href = '/discordbots';
            } else {
                return <ComponentToProtect {...this.props} user={this.state.user} />;
            }
        }
    }
}

export class DiscordAuth extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            redirect: false,
        };
    }

    async componentDidMount() {
        console.log('wad')
        const res = await fetch('http://localhost:8080/api/userdata', {
            method: 'get',
            credentials: 'include'
        });

        if (res.status !== 404) {
            const userData = await res.json();
            this.setState({ loading: false, isLoggedIn: true, user: userData });
        } else {
            this.setState({ loading: false, isLoggedIn: false });
        }
    }


    render() {
        const { loading, isLoggedIn } = this.state;
        if (loading) {
            return null;
        }
        if (isLoggedIn) {
            window.location.href = '/discordbots/stats';
        } else {
            return <Login />
        }
    }
}