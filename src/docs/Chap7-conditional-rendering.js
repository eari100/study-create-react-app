import React from "react"

const UserGreeting = props => <h1>Welcom back!</h1>
const GuestGreeting = props => <h1>Please sign up.</h1>

const Greeting = props => {
    const isLoggedIn = props.isLoggedIn

    return isLoggedIn ? <UserGreeting /> : <GuestGreeting />
}

const LoginButton = props => (
    <button onClick={props.onClick}>
        Login
    </button>
)

const LogoutButton = props => (
    <button onClick={props.onClick}>
        Logout
    </button>
)

class LoginControl extends React.Component {
    constructor(props) {
        super(props)
        this.handleLoginClick = this.handleLoginClick.bind(this)
        this.handleLogoutClick = this.handleLogoutClick.bind(this)
        this.state = {isLoggedIn: false}
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true})
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false})
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn
        let button = isLoggedIn ? <LogoutButton onClick={this.handleLogoutClick} /> : <LoginButton onClick={this.handleLoginClick} />

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn}/>
                {button}
            </div>
        )
    }
}



const Mailbox = props => {
    const unreadMessages = props.unreadMessages

    return (
        <div>
            <h1>Hello!</h1>
            {unreadMessages.length > 0 && <h2>You have {unreadMessages.length} unreadMessages.</h2>}
        </div>
    )
}

export default Mailbox