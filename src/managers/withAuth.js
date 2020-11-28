import React, { Component } from 'react';

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
                window.location = 'https://discord.com/api/oauth2/authorize?client_id=560501397938896897&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fauth&response_type=code&scope=identify%20guilds';
            } else {
                return <ComponentToProtect {...this.props} user={this.state.user} />;
            }
        }
    }
}