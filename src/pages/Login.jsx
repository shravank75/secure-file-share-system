function Login() {
  const handleLogin = () => {
    window.location.href = "http://localhost:5000/auth/google";
  };

  return (
    <div style={{ textAlign: "center", paddingTop: "100px" }}>
      <h1>Secure File Sharing</h1>
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
}
export default Login;
