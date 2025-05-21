import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Login from "./Login";
import toast from "react-hot-toast";

function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
     const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
     }
     await axios.post("http://localhost:4001/user/signup", userInfo)
     .then((res) => {
      console.log(res.data);
      if(res.data){
       toast.success('Successfully Signed in!');
      }
      localStorage.setItem("Users", JSON.stringify(res.data.user));
     }).catch((err) => {
      if(err.response){
        console.log(err);
        toast.error("Error: " + err.response.data.message)
      }
     })
  };
  
  return (
    <>
      <div className="flex h-screen items-center justify-center">
      <div  className="border-white-2 rounded-lg shadow-md p-4">
        <div className="w-[600px]">
          <form  onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-102 top-42.5">
              ✕
            </Link>
          <h3 className="font-bold text-lg">Sign Up</h3>
          {/* Name */}
          <div className="mt-4 space-y-2">
            <span>Name</span>
            <br />
            <input
              type="text"
              placeholder="Enter your fullname"
              className="w-80 px-3 py-1 border-none rounded-md outline-none shadow-lg"
              {...register("fullname", { required: true })}
            />
            <br />
            {errors.fullname && <span className="text-sm text-red-500">This field is required</span>}
          </div>
          {/* Email */}
          <div className="mt-4 space-y-2">
            <span>Email</span>
            <br />
            <input
              type="email"
              placeholder="Enter your Email"
              className="w-80 px-3 py-1 border-none rounded-md outline-none shadow-lg"
              {...register("email", { required: true })}
            />
            <br />
            {errors.email && <span className="text-sm text-red-500">This field is required</span>}
          </div>
          {/* Password */}
          <div className="mt-4 space-y-2">
            <span>Password</span>
            <br />
            <input
              type="password"
              placeholder="Enter your Password"
              className="w-80 px-3 py-1 border-none rounded-md outline-none shadow-lg "
              {...register("password", { required: true })}
            />
            <br />
            {errors.password && <span className="text-sm text-red-500">This field is required</span>}
          </div>
          {/* Button */}
          <div className="flex justify-around  mt-4">
            <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
              Signup
            </button>
            <p className="text-xl">
              Already have account?{" "}
              <button className="underline text-blue-500 cursor-pointer" 
              onClick={() => {document.getElementById("my_modal_3").showModal();}}>
                Login
              </button>{" "}
              <Login />
            </p>
          </div>
          </form>
        </div>
      </div>
      </div>
    </>
  );
}

export default Signup;
