"use client";
import Button from "@/components/form/Button";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full h-full flex md:grid grid-cols-2 items-center justify-center">
      <div className="hidden md:flex w-full h-full items-center justify-center">
        <div className="w-full h-[400px] relative">
          <Image src={"/login.png"} alt="alt" fill className="object-contain" />
        </div>
      </div>
      <div className="w-3/5 h-full flex flex-col justify-center gap-y-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col justify-center gap-y-4"
        >
          <input
            placeholder="Username"
            {...register("username", {
              required: true,
              minLength: 3,
            })}
            className="input-field"
          />
          <input
            placeholder="Password"
            {...register("password", { required: true, minLength: 6 })}
            className="input-field"
          />
          <Button disabled={!isValid || isSubmitting} title="log in" />
        </form>
        <p className="text-sm text-cyan-500 text-button font-semibold px-2 rounded-md no-select w-fit">
          Forgotten password?
        </p>

        <p className="text-center text-sm font-medium">
          Don{"'"}t have an account?
          <Link
            href="/register"
            className="mx-1 px-2 py-1 rounded-md click text-cyan-500 font-semibold"
          >
            Create account
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
