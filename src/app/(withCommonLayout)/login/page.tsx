"use client";
import FXInput from "@/src/components/form/FXInput";
import LostFoundForm from "@/src/components/form/LostFoundForm";
import { loginValidationSchema } from "@/src/schemas/login.schema";
import { Button } from "@heroui/button";
import {zodResolver} from "@hookForm/resolver/zod";

const Loginpage = () => {
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="flex h-[calc(100vh-200px)] w-full flex-col items-center justify-center">
      <h3 className="my-2 text-3xl font-bold">Login with Lost Found Zone</h3>
      <p className="mb-4">Welcome Back! Let&lsquo;s Get Started</p>
      <div className="w-[35%]">
        <LostFoundForm onSubmit={onSubmit} resolver={zodResolver(loginValidationSchema)}>
          <div className="py-3">
            <FXInput name="email" label="Email" type="email" />
          </div>
          <div className="py-3">
            <FXInput name="password" label="Password" type="password" />
          </div>

          <Button
            type="submit"
            className="my-3 w-full rounded-md bg-default-900 font-semibold text-black"
          >
            Login
          </Button>
        </LostFoundForm>
      </div>
    </div>
  );
};

export default Loginpage;
