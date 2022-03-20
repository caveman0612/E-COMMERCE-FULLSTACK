const Login = () => {
  const containerStyles = {
    display: "flex",
    alignItems: "center",
    height: "100vh",
    background: `linear-gradient(rgba(255, 255, 255, .6), rgba(255, 255, 255, 0.6)),
    url("https://images.pexels.com/photos/128639/pexels-photo-128639.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center`,
  };
  return (
    <div className="text-center" style={containerStyles}>
      <form className="w-50 mx-auto">
        <h1 className="h3 mb-3 fw-bold">Sign In Here</h1>

        <div className="form-floating mb-2">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="my-3">
          <a href="/" className="m-3 text-black fw-bold">
            Forgot Password
          </a>
          <a href="/" className="m-3 text-black fw-bold">
            Register
          </a>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Sign in
        </button>
        <p className="my-3 fw-bold">© {new Date().getFullYear()}</p>
      </form>
    </div>
  );
};

export default Login;
