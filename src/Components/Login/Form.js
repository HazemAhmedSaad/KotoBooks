import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
// import { NavLink } from "react-router-dom";
import "./Form.css";
function BasicExample() {
  const [flage1, setFlage1] = useState(0);
  const [flage2, setFlage2] = useState(0);
  const [data, setData] = useState({
    userEmail: "",
    userPass: "",
  });
  const [errorData, setErrorData] = useState({
    emailError: "",
    passError: "",
  });
  let rgxEmail = /^[^s@]+@([^s@.,]+.)+[^s@.,]{2,}$/;
  let rgxPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
    if (event.target.name === "userEmail") {
      if (!rgxEmail.test(event.target.value) && event.target.value !== "") {
        setFlage1(0);
        setErrorData({ ...errorData, emailError: "Please enter valid email" });
      } else if (event.target.value === "") {
        setFlage1(0);

        setErrorData({ ...errorData, emailError: "Email is requared" });
      } else {
        setFlage1(1);
        setErrorData({ ...errorData, emailError: "" });
      }
    }
    if (event.target.name === "userPass") {
      if (!rgxPass.test(event.target.value) && event.target.value !== "") {
        setFlage2(0);
        setErrorData({
          ...errorData,
          passError: "Enter 8 characters at least 1 letter and 1 number",
        });
      } else if (event.target.value === "") {
        setFlage2(0);
        setErrorData({ ...errorData, passError: "Password is requared" });
      } else {
        setFlage2(1);
        setErrorData({ ...errorData, passError: "" });
      }
    }
  };
  useEffect(()=>{},[flage1,flage2])
  return (
    <div className="app-style">
      <div
        className="border mx-auto"
        style={{
          backgroundColor: "white",
          width: "450px",
          height: "400px",
          position: "relative",
          marginTop: "100px",
        }}
      >
        <Form
          className="w-75 mx-auto "
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              required
              placeholder="Enter email"
              name="userEmail"
              value={data.userEmail}
              onChange={(e) => handleChange(e)}
            />
            <Form.Text className="text-danger">
              {errorData.emailError}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              required
              placeholder="Password"
              name="userPass"
              value={data.userPass}
              onChange={(e) => handleChange(e)}
            />
            <Form.Text className="text-danger">{errorData.passError}</Form.Text>
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="w-100 btn-f"
            style={{ backgroundColor: "#222", borderColor: "#F65656" }}
            disabled={(flage1 && flage2)?false:true}
          >
            <Link className="link-btn" to={"/"}>
              <div>Login</div>
            </Link>
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default BasicExample;
