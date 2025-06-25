"use client";
import { Button } from "@heroui/button";
import FXInput from "@/src/components/form/FXInput";
import LostFoundForm from "@/src/components/form/LostFoundForm";
import { zodResolver } from '@hookform/resolvers/zod';
import loginValidationSchema from "@/src/schemas/login.schema";

const Loginpage = () => {
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="flex h-[calc(100vh-200px)] w-full flex-col items-center justify-center">
      <h3 className="my-2 text-3xl font-bold">Login with Lost Found Zone</h3>
      <p className="mb-4">Welcome Back! Let&lsquo;s Get Started</p>
      <div className="w-[35%]">
        <LostFoundForm resolver={zodResolver(loginValidationSchema)} onSubmit={onSubmit}>
          <div className="py-3">
            <FXInput label="Email" name="email" type="email" />
          </div>
          <div className="py-3">
            <FXInput label="Password" name="password" type="password" />
          </div>

          <Button
            className="my-3 w-full rounded-md bg-default-900 font-semibold text-black"
            type="submit"
          >
            Login
          </Button>
        </LostFoundForm>
      </div>
    </div>
  );
};

export default Loginpage;












