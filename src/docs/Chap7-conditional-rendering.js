const UserGreeting = props => <h1>Welcom back!</h1>
const GuestGreeting = props => <h1>Please sign up.</h1>

const Greeting = props => {
    const isLoggedIn = props.isLoggedIn

    return isLoggedIn ? <UserGreeting /> : <GuestGreeting />
}

export default Greeting