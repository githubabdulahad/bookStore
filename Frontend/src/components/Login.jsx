import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const modalRef = useRef(null);
  const onSubmit = (data) => {
    console.log(data); // Form data on successful submission
  };
  const closeModal = () => {
    if(modalRef.current){
      modalRef.current.close();
    }
  }
  return (
    <div>
      <dialog id="my_modal_3" className="modal" ref={modalRef}>
        <div className="modal-box">
          <form  onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>
              ✕
            </Link>
          <h3 className="font-bold text-lg">Login</h3>
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
            <button type="submit" className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
              Login
            </button>
            <p>
              Not registered?{" "}
              <Link  to="/signup" className="underline text-blue-500 cursor-pointer" >
                Signup
              </Link>{" "}
            </p>
          </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
