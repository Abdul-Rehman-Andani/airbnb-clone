"use client";

import Model from "./Model";
import { closeRegistorModel } from "@/hooks/registorModelSlice";
import { useSelector, useDispatch } from "react-redux";
import Heading from "../Heading";
import Input from "../Input";
import { useForm } from "react-hook-form";
import Button from "../Button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import axios from "axios";

interface FormData {
  name: string;
  email: string;
  password: string;
}

const RegisterModel = () => {
  const { isRegistorOpen } = useSelector((store: any) => store.registorModel);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    const res = await axios.post("/api/registor/", data);
    console.log(res);
  };

  return (
    <>
      {isRegistorOpen && (
        <Model close={closeRegistorModel} label="Registor">
          <Heading label="Welcome to Airbnb" />
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              name="name"
              type="text"
              placeholder="Username"
              register={register}
            />
            {errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
            )}

            <Input
              name="email"
              type="email"
              placeholder="Email"
              register={register}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}

            <Input
              name="password"
              type="password"
              placeholder="Password"
              register={register}
            />
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}

            <Button full fill value="Registor" extra="mt-4" />
            <Button
              full
              border
              icon={<FcGoogle />}
              value="Continue with Google"
              extra="mt-4"
            />
            <Button
              full
              border
              icon={<FaGithub />}
              value="Continue with Github"
              extra="mt-4"
            />
          </form>
        </Model>
      )}
    </>
  );
};

export default RegisterModel;
