import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const generateError = (error) =>
    toast.error(error, {
      position: "top-right",
      theme: "dark",
    });
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:8000/login",
        {
          ...values,
        },
        { withCredentials: true }
      );
      if (data) {
        if (data.errors) {
          const { email, password } = data.errors;
          if (email) generateError(email);
          else if (password) generateError(password);
        } else {
          navigate("/order");
        }
      }
    } catch (ex) {
      console.log(ex);
    }
  };
  return (
    <>
      <div className="log-img">
        <div className="container">
          <div className="row">
            <div className="col-md-offset-5 col-md-4 text-center">
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="form-login">
                  <h4>Log-in Here</h4>
                  <div className="userNp-log">
                    <input
                      type="email"
                      name="email"
                      className="form-control input-sm chat-input"
                      placeholder="Email"
                      onChange={(e) =>
                        setValues({
                          ...values,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                    <input
                      type="text"
                      name="password"
                      className="form-control input-sm chat-input"
                      placeholder="password"
                      onChange={(e) =>
                        setValues({
                          ...values,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                    <div className="wrapper">
                      <button className="button1" type="Submit">
                        Log-In
                      </button>
                    </div>
                    <p>
                      New to our page? <Link to="/signup">Signup</Link>
                      <br />
                      <Link to="/">Home</Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <br />
          <br />
          <br />

          <ToastContainer />
        </div>
      </div>
    </>
  );
}

export default Login;
