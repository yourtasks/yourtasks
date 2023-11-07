"use client";

import Button from "@/components/form/Button";
import Image from "next/image";
import { useForm } from "react-hook-form";

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full h-full flex items-center justify-center md:grid grid-cols-2">
      <div className="hidden w-full h-full md:flex items-center justify-center">
        <div className="relative w-full min-h-[400px]">
          <Image
            src={"/register.png"}
            alt="alt"
            className="object-contain"
            fill
          />
        </div>
      </div>
      <div className="h-full w-4/5 flex flex-col gap-y-4 items-center justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-y-4 items-center justify-center"
        >
          <div className="w-full  flex items-center gap-x-4">
            <input
              placeholder="Firstname"
              className="input-field"
              {...register("firstname", {
                required: true,
                minLength: 2,
                maxLength: 16,
              })}
            />
            <input
              placeholder="Lastname"
              className="input-field"
              {...register("lastname", {
                required: true,
                minLength: 2,
                maxLength: 16,
              })}
            />
          </div>
          <input
            placeholder="Username"
            className="input-field"
            {...register("username", {
              required: true,
              minLength: 6,
              maxLength: 20,
            })}
          />
          <input
            type="number"
            placeholder="Student Id"
            className="input-field"
            {...register("studentId", {
              required: true,
              minLength: 9,
              maxLength: 9,
            })}
          />
          <Button disabled={!isValid || isSubmitting} title="Create account" />
        </form>
      </div>
    </div>
  );
};

export default Page;
