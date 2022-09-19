import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    let isValiduser = false;
    let isValidadmin = false;
    if (userName == "admin" && password == "admin") {
      navigate("/dashBoard/admin");
      isValidadmin = true;
    }
    if (userName == "user" && password == "user") {
      navigate("/dashBoard/user");
      isValiduser = true;
    }
    if (!isValidadmin && !isValiduser) {
      alert("User Name or Password is Wrong");
    }
  };
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <form action="" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="User Name"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input type="submit" value={"login"} />
      </form>
    </>
  );
};

export default Login;
