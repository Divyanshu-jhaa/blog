import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signin = (props) => {
  const navigate = useNavigate();
  const [data, setData] = useState({ username: "", password: "" });
  let stHelper = false;
  const loginHandler = async () => {
    if (data.username.length && data.password.length) {
      const res = await axios.get(
        `http://localhost:8080/user/username/${data.username}`
      );
      if (res.status === 200) {
        if (
          res.data.username === data.username &&
          res.data.password === data.password
        ) {
          stHelper = true;
          localStorage.setItem(
            "loginState",
            JSON.stringify({
              username: res.data.username,
              user_id: res.data.user_id,
            })
          );
          navigate("/dashboard", { replace: true });
        }

        if (stHelper === false) {
          console.log("wrong details");
        }
      } else {
        console.log("server error");
      }
    }
  };
  return (
    <div className="flex-auto w-[100%] m-1 flex flex-col justify-center text-center">
      <div className="font-[500] mt-1 mb-1">
        <input
          type="text"
          className="p-2 w-[75%] rounded-md bg-[#E1ECFD]"
          placeholder="username"
          onChange={(e) => {
            setData((prevState) => {
              return { ...prevState, username: e.target.value };
            });
          }}
        />
      </div>
      <div className="font-[500] mt-1 mb-1">
        <input
          type="password"
          className="p-2 w-[75%] rounded-md bg-[#E1ECFD]"
          placeholder="password"
          onChange={(e) => {
            setData((prevState) => {
              return { ...prevState, password: e.target.value };
            });
          }}
        />
      </div>
      <div className="font-[500] mt-2 mb-1">
        <button
          className="p-2 border border-black w-[75%] text-[white] rounded-md bg-[#08345B]"
          onClick={loginHandler}
        >
          Log in
        </button>
      </div>
      <div className="font-[500] mt-2 mb-1"></div>
      <div className="text-[0.8rem] font-[500] mt-2 mb-1">
        <p>
          Don't have an account?
          <span
            className="text-[#08345B] font-[600] cursor-pointer"
            onClick={() => props.registerViewHandler()}
          >
            {" "}
            Register here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signin;
