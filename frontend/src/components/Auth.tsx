import { SigninInput, SignupInput } from "@sadiddev/common";
import axios from "axios";
import React, { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";

export default function Auth({ type }: { type: "signin" | "signup" }) {
  const [postInputs, setPostInputs] = useState<SignupInput>({
    email: "",
    name: "",
    password: "",
  });
  const navigate = useNavigate();
  async function sendRequest() {
    try {
      const res = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type === "signin" ? "signin" : "signup"}`,
        postInputs
      );
      const jwt = await res.data.token;
      localStorage.setItem("token", jwt);
      console.log(jwt);
      navigate("/blog");
    } catch (error) {
      console.log(error);
      alert(error);
    }
  }
  return (
    <div className="h-screen flex justify-center flex-col items-center ">
      {/* {JSON.stringify(postInputs)} */}
      <div className="mb-6">
        <div className="text-4xl font-extrabold mb-1">
          {type === "signin" ? "Sign in" : "Create and account"}
        </div>
        <div className="font-light text-slate- ">
          {type === "signin"
            ? "Don't have an account?"
            : "Already have an account?"}
          <Link
            className="pl-2 underline"
            to={type === "signin" ? "/signup" : "/signin"}
          >
            {type === "signin" ? "Signup" : "Login"}
          </Link>
        </div>
      </div>
      <div className=" w-2/3">
        {type === "signup" && (
          <LabelledInput
            label="Name"
            placeholder="Enter your name"
            onChange={(e) => {
              setPostInputs((c) => {
                return { ...c, name: e.target.value };
              });
            }}
          />
        )}
        <LabelledInput
          label="Email"
          placeholder="Enter your email"
          onChange={(e) => {
            setPostInputs((c) => {
              return { ...c, email: e.target.value };
            });
          }}
        />
        <LabelledInput
          label="Password"
          placeholder="Enter your password"
          type="password"
          onChange={(e) => {
            setPostInputs((c) => {
              return { ...c, password: e.target.value };
            });
          }}
        />
        <button
          onClick={sendRequest}
          type="button"
          className="w-full text-white bg-black hover:bg-gray-900 focus:outline-none 
          focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 
          me-2 mb-2 "
        >
          {type === "signin" ? "Signin" : "Signup"}
        </button>
      </div>
    </div>
  );
}
interface LabelledInputType {
  label: string;
  placeholder: string;
  type?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
function LabelledInput({
  label,
  placeholder,
  onChange,
  type,
}: LabelledInputType) {
  return (
    <div>
      <div className="mb-6 ">
        <label className="block mb-2 text-sm font-bold text-black">
          {label}
        </label>
        <input
          type={type ?? "text"}
          id="first_name"
          onChange={onChange}
          className="w-full bg-gray-50 border border-gray-300 text-gray-900 
          text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
          block  p-2.5 "
          placeholder={placeholder}
          required
        />
      </div>
    </div>
  );
}
