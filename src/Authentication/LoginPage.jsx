import React, { useState } from "react";
import "./LoginPage.css";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z
    .string()
    .email({ message: "Please Enter Valid Email Address" })
    .min(3),
  password: z
    .string()
    .min(8, { message: "Password Should be atleast 8 characters" }),
});
const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  //   console.log(register("name"));
  //   const passwordRef = useRef(null);
  const onSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <section className="align_center form_page">
      <form className="authentication_form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Login Form</h2>
        <div className="form_inputs">
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              className="form_text_input"
              placeholder="Enter Your Email Address"
              {...register("email")}
            />
            {errors.email && (
              <em className="form_error">{errors.email.message}</em>
            )}
          </div>
          <div>
            <label htmlFor="password">Enter Your Password</label>
            <input
              type="password"
              id="password"
              //   ref={passwordRef}
              className="form_text_input"
              placeholder="Enter password Number"
              {...register("password", { valueAsNumber: true })}
            />
            {errors.password && (
              <em className="form_error">{errors.password.message}</em>
            )}

            {/* <button
              type="button"
              onClick={() =>
                console.log((passwordRef.current.type = "password"))
              }
             >
              Hide Password
            </button>

            <button
              type="button"
              onClick={() => console.log((passwordRef.current.type = "text"))}
            >
              {" "}
              Show Password
            </button> */}
          </div>

          <button type="submit" className="search_button form_submit">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;
