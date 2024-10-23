import Form from "react-bootstrap/Form";
import { useRef } from "react";

import { checkUsername } from "../../data/username";

function Login({ setToken }) {
  const userRef = useRef();
  const passRef = useRef();

  return (
    <div style={{ textAlign: "center", width: "200px", margin: "2rem auto" }}>
      <Form.Label htmlFor="username">Username</Form.Label>
      <Form.Control
        type="text"
        id="username"
        aria-describedby="passwordHelpBlock"
        placeholder="user"
        style={{ textAlign: "center" }}
        ref={userRef}
      />
      <Form.Label htmlFor="password">Password</Form.Label>
      <Form.Control
        type="password"
        id="password"
        aria-describedby="passwordHelpBlock"
        placeholder="pass"
        style={{ textAlign: "center" }}
        ref={passRef}
      />
      <button
        className="btn btn-success mt-3"
        onClick={() => {
          const user = userRef.current.value.trim();
          const pass = passRef.current.value.trim();
          const userInfo = checkUsername(user, pass);
          if (userInfo === null) {
            alert("Username or password is wrong");
            userRef.current.value = "";
            passRef.current.value = "";
            userRef.current.setFocus();
          } else {
            setToken(userInfo.token);
          }
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
