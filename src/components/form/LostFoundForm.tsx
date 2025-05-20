"use client"
import { ReactNode } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

interface FormConfig {
  defaultValues?: Record<string, any>;
  resolver?: any;
}

interface IProps extends FormConfig {
  children: ReactNode;
  onSubmit: SubmitHandler<any>;
}

const LostFoundForm = ({
  children,
  onSubmit,
  defaultValues,
  resolver,
}: IProps) => {
  const formConfig: FormConfig = {};
  if (!!defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }
  if (!!resolver) {
    formConfig["resolver"] = resolver;
  }

  const methods = useForm();

  const submitHandlar = methods.handleSubmit;

  return (
    <FormProvider {...methods}>
      <form onSubmit={submitHandlar(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default LostFoundForm;
