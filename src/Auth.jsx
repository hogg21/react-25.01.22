import React from "react";
import Login from "./Login.jsx";
import Logout from "./Logout.jsx";
import Spinner from "./Spinner.jsx";


// algo
// 1. show login by default
// 2. after Login click Spinner
// 3. show Logout
// 4. after Logout show Login
class Auth extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         isLoggedIn: false,
    //         isProssing: true
    //     }
    // }
    state = {
        isLoggedIn: false,
        isLoading: false
    }

    handleLoginClick = () => {
        this.setState({
            isLoading: true
        })
        setTimeout(() => {
            this.setState({
                isLoggedIn: true,
                isLoading: false
            })
        }, 2000)
    }
    handleLogoutClick = () => {
        // input: obj
        // out: undefined
        this.setState({
            isLoggedIn: false
        })
    }
    render() {
        const { isLoggedIn, isLoading } = this.state;
        if (isLoading) {
            return <Spinner></Spinner>
        }
        if (isLoggedIn) {
            return <Logout onLogout={this.handleLogoutClick}></Logout>
        }
        return <Login onLogin={this.handleLoginClick}></Login>
    }
    // isLoggedIn - bool
    // isLogging - bool
}
export default Auth;