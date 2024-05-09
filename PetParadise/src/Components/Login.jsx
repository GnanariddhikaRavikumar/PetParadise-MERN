function Login() {

    return (
        <div className="login">
            <h1>PET PARADISE</h1>
            <form>
                <h1>ENTER YOUR DETAILS TO LOGIN..</h1>
                <label htmlFor="username">UserName:</label>
                <input type="text" id="username" placeholder="Enter Username"/>
                <label htmlFor="password">Password:</label>
                <input type="text" id="password" placeholder="Enter your Password"/>
                <a href="">Or Create an account</a>
            </form>
        </div>
    )
}

export default Login;