"use client";

import Model from "./Model";
import { useSelector, useDispatch } from "react-redux";
import Heading from "../Heading";
import Input from "../Input";
import { useForm } from 'react-hook-form';
import Button from "../Button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import axios from "axios";
import { closeSignInModel } from "@/hooks/signInModelSlice";

interface FormData {
   email: string;
   password: string;
}

const SignInModel = () => {
  const { isSignInOpen } = useSelector((store: any) => store.signInModel);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    const res = await axios.post("/api/registor/", data);
    console.log(res);
  }

  return (
    <>
      {isSignInOpen && (
        <Model close={closeSignInModel} label="Sign in">
          <Heading label="Welcome to Airbnb" />
          <form onSubmit={handleSubmit(onSubmit)}>
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
