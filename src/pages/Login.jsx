const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div>Login</div>

      <form onSubmit={handleSubmit}>
        {/* Email */}
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" placeholder="example@gmail.com" />
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password">Password</label>
          <input type={"password"} id="password" placeholder="********" />
        </div>

        {/* Submit button */}
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Login;
