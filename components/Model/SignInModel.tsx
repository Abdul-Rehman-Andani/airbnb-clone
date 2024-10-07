"use client"; // Make sure this is included to ensure client-side rendering

import Model from "./Model";
import { useSelector, useDispatch } from "react-redux";
import Heading from "../Heading";
import Input from "../Input";
import { useForm } from 'react-hook-form';
import Button from "../Button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { closeSignInModel } from "@/hooks/signInModelSlice";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react"; // Importing signIn from next-auth/react

interface FormData {
   email: string;
   password: string;
}

const SignInModel = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isSignInOpen } = useSelector((store: any) => store.signInModel);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const result = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false, // Prevent automatic redirect
        callbackUrl: "/", // Redirect URL after sign in
      });

      if (result?.error) {
        // Handle sign-in error
        console.error("Sign-in error:", result.error);
      } else {
        // Successful sign-in
        console.log("Sign-in successful:", result);
        router.push("/"); // Manually redirect if needed
        dispatch(closeSignInModel());
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  };

  return (
    <>
      {isSignInOpen && (
        <Model close={() => dispatch(closeSignInModel())} label="Sign in">
          <Heading label="Welcome to Airbnb" />
          <form onSubmit={handleSubmit(onSubmit)} >
            <Input 
              name="email" 
              type="email" 
              placeholder="Email" 
              register={register} 
            />
            {errors.email && <span className="text-red-500">{errors.email.message}</span>}

            <Input 
              name="password" 
              type="password" 
              placeholder="Password" 
              register={register} 
            />
            {errors.password && <span className="text-red-500">{errors.password.message}</span>}

            <Button full fill value="Sign in" extra="mt-4"/>
            <Button full border icon={<FcGoogle />} value="Continue with Google" extra="mt-4" />
            <Button full border icon={<FaGithub />} value="Continue with Github" extra="mt-4" />
          </form>
        </Model>
      )}
    </>
  );
};

export default SignInModel;
