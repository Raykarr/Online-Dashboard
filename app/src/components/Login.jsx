import { useState, useEffect } from "react"; //manage state varyables
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState(""); // each state veriable is payred with a setter variable
  const [password, setPassword] = useState(""); //setter is used to update values
  const navigate = useNavigate();

  useEffect(() => { //checks if there is any authentication data
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, [navigate]);

  const handleLogin = async () => { //function called when login button clicked 
    let result = await fetch(
      "http://localhost:5000/login",
      {
        method: "post",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      }
    );

    result = await result.json();

    if (result.auth) {
      localStorage.setItem("user", JSON.stringify(result.user));
      localStorage.setItem("token", JSON.stringify(result.auth));
      navigate("/");
    } else {
      alert("Please enter correct details.");
    }
  };

  return (
    <div className="container">
      <div className="card mx-auto mt-5" style={{ maxWidth: "400px" }}>
        <div className="card-header bg-dark text-white">
          <h1 className="card-title">Login</h1>
        </div>
        <div className="card-body">
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="form-control mb-3"
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="form-control mb-4"
          />
        </div>
        <button onClick={handleLogin} className="btn btn-dark btn-lg btn-block">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
