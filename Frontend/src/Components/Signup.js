import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
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
        "http://localhost:8000/signup",
        {
          ...values,
        },
        { withCredentials: true }
      );
      if (data) {
        if (data.errors) {
          const { username, email, password } = data.errors;
          if (username) generateError(username);
          else if (email) generateError(email);
          else if (password) generateError(password);
        } else {
          navigate("/login");
        }
      }
    } catch (ex) {
      console.log(ex);
    }
  };
  return (
    <>
      <div className="sign-img">
        <div className="container">
          <div className="row">
            <div className="col-md-offset-5 col-md-4 text-center">
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="form-signup">
                  <h4>Create Your Account Here</h4>
                  <div className="userNp-sign">
                    <input
                      type="text"
                      name="username"
                      className="form-control input-sm chat-input"
                      placeholder="Username"
                      autoComplete="off"
                      onChange={(e) =>
                        setValues({
                          ...values,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                    <input
                      type="email"
                      name="email"
                      className="form-control input-sm chat-input"
                      placeholder="Email"
                      autoComplete="off"
                      onChange={(e) =>
                        setValues({
                          ...values,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                    <input
                      type="password"
                      name="password"
                      className="form-control input-sm chat-input"
                      placeholder="Password"
                      autoComplete="off"
                      onChange={(e) =>
                        setValues({
                          ...values,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                    <div className="wrapper">
                      <button className="button1" type="Submit">
                        Sign-up
                      </button>
                    </div>
                    <p>
                      Already have an Account? <Link to="/login">Log-in</Link>
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
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Signup;
