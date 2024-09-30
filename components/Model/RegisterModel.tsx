"use client";

import Model from "./Model";
import { close } from "@/hooks/modelSlice";
import { useSelector, useDispatch } from "react-redux";
import Heading from "../Heading";
import Input from "../Input";
import { useForm } from 'react-hook-form';
import Button from "../Button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";


interface FormData {
   username: string;
   email: string;
   password: string;
}

const RegisterModel = () => {
  const { isOpen } = useSelector((store: any) => store.model);
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    console.log(data);
    // Add your registration logic here
  }

  return (
    <>
      {isOpen && (
        <Model label="Register">
          <Heading label="Welcome to Airbnb" />
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input 
              name="username" 
              type="text" 
              placeholder="Username" 
              register={register} 
            />
            {errors.username && <span className="text-red-500">{errors.username.message}</span>}

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

            <Button full fill value="Registor" extra="mt-4"/>
            <Button full border icon={<FcGoogle />} value="Continue with Google" extra="mt-4" />
            <Button full border icon={<FaGithub />} value="Continue with Github" extra="mt-4" />
          </form>
        </Model>
      )}
    </>
  );
};

export default RegisterModel;
