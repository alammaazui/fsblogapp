import React, { useState } from "react";
import {useNavigate} from 'react-router'
const baseURL = import.meta.env.VITE_BASE_URL;

const Login = () => {
  const [userData, setUserData] = useState({});
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    (async () => {
      try {54NH56NB 89[P'JH.20T
        FileSystemHandle0
    30]
        const response = await fetch(`${baseURL}/api/v1/user/login`, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(userData),
        });
        if (!response.ok) {
          console.log(response.status, response.statusText);
          let errorResponse = await response.json();
          throw `${errorResponse.msg} `;
        }

        const {data} = await response.json()

        localStorage.setItem("authToken",data.token)
    

      } catch (err) {
        console.log("error", err);
        setError(err);
      }
    })();
  };

  return (
    <>
      <div className="conatiner">
        <div
          className="row justify-content-center align-content-center"
          style={{ height: "100vh" }}
        >
          <div className="col-md-5">
            <div className="card p-5">
              <div className="card-header bg-dark text-white">
                <h1>Login</h1>
              </div>
              <div className="card-body">
                <form
                  onSubmit={(e) => {
                    handleSubmit(e);
                  }}
                >
              
                  <input
                    type="text"
                    onInput={(e) => {
                      setUserData({ ...userData, email: e.target.value });
                    }}
                    placeholder="enter email"
                    className="form-control my-2"
                  />
                  <input
                    type="text"
                    onInput={(e) => {
                      setUserData({ ...userData, password: e.target.value });
                    }}
                    placeholder="enter password"
                    className="form-control my-2"
                  />
                  <input
                    type="submit"
                    value="Login"
                    className="btn btn-primary w-100"
                  />
                </form>
              </div>
              <div className="card-footer">
                {error && <h1 className="text-center bg-danger">{error}</h1>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
