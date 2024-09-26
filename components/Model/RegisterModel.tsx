"use client";

import Model from "./Model";
import { close } from "@/hooks/modelSlice";
import { useSelector, useDispatch } from "react-redux";
import Heading from "../Heading";
import Input from "../Input";
import { useForm } from 'react-hook-form';
import Button from "../Button";

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

            <Button full value="Registor" extra="mt-4"/>
          </form>
        </Model>
      )}
    </>
  );
};

export default RegisterModel;
