import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import validator from "validator";
import axios from "axios";

const Signup = (props) => {
  const [data, setData] = useState({
    user_id: uuidv4(),
    username: "",
    name: "",
    password: "",
    email: "",
  });
  const registerHandler = async () => {
    console.log(data);
    if (
      data.user_id.length &&
      data.username.length &&
      data.name.length &&
      data.password.length &&
      data.email.length
    ) {
      if (validator.isEmail(data.email) && validator.isAlpha(data.name)) {
        console.log("Correct entry");
        const res = await axios.post("http://localhost:8080/add", data);
        console.log(res);
      } else {
        console.log("Enter data not correct");
      }
    } else {
      console.log("Empty field");
    }
  };
  return (
    <div className="flex-auto w-[100%] m-1  flex flex-col justify-center text-center">
      <div className="font-[500] mt-1 mb-1">
        <input
          type="text"
          className="p-2 w-[75%] rounded-md bg-[#E1ECFD]"
          placeholder="name"
          onChange={(e) => {
            setData((prevState) => {
              return { ...prevState, name: e.target.value };
            });
          }}
        />
      </div>
      <div className="font-[500] mt-1 mb-1">
        <input
          type="mail"
          className="p-2 w-[75%] rounded-md bg-[#E1ECFD]"
          placeholder="email"
          onChange={(e) => {
            setData((prevState) => {
              return { ...prevState, email: e.target.value };
            });
          }}
        />
      </div>
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
          onClick={registerHandler}
        >
          Register
        </button>
      </div>
      <div className="font-[500] mt-2 mb-1"></div>
      <div className="text-[0.8rem] font-[500] mt-2 mb-1">
        <p>
          Already have an account?
          <span
            className="text-[#08345B] font-[600] cursor-pointer"
            onClick={() => props.registerViewHandler()}
          >
            {" "}
            Click here to login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
