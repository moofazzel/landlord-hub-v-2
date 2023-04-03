import Button from "@/components/common/Button";
import Divider from "@/components/common/Divider";
import GoogleIcon from "@/components/icons/GoogleIcon";
import { FormValues } from "@/lib/types/types";
import Image from "next/image";
import Link from "next/link";
import { useForm, Resolver } from "react-hook-form";
import signUpImage from "../public/Assets/images/signup.svg";

function signUp() {
  const resolver: Resolver<FormValues> = async (values) => {
    return {
      values: values.email ? values : {},
      errors: !values.password
        ? {
            firstName: {
              type: "required",
              message: "This is required.",
            },
          }
        : {},
    };
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver });

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <>
      <section className="lg:w-[1280px] mx-auto my-20 px-5">
        <div className="lg:flex flex-row-reverse lg:bg-[#F3F4FC] rounded-[30px]">
          <div className="flex-1 flex justify-center items-center lg:px-10">
            <Image src={signUpImage} alt="" priority />
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex-1  bg-white rounded-[30px] lg:mainShadow mx-auto md:p-8"
          >
            <h4 className="text-black text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8">
              Sign Up
            </h4>
            <p className="text-center text-lh-grey-100">
              Please Enter Your Details
            </p>
            <div className="flex flex-col gap-4 p-4 md:px-8 md:pt-8">
              <div>
                <input
                  {...register("fullName", { required: true })}
                  className={errors.fullName ? "input-error" : "input "}
                  placeholder="Full Name"
                  type="text"
                />
                {errors.fullName && (
                  <span className="text-red-400 my-2">
                    fullName is required
                  </span>
                )}
              </div>

              <div>
                <input
                  {...register("email", { required: true })}
                  className={errors.email ? "input-error" : "input "}
                  placeholder="Email"
                  type="email"
                />
                {errors.email && (
                  <span className="text-red-400 my-2">Email is required</span>
                )}
              </div>

              <div>
                <input
                  // onChange={handlePassword}
                  {...register("password", { required: true })}
                  type="password"
                  className={errors.email ? "input-error" : "input "}
                  placeholder="Password"
                />
                {errors.password && (
                  <span className="text-red-400 my-2">
                    Password is required
                  </span>
                )}
              </div>
              <p className="text-right hover:text-black cursor-pointer hover:underline text-gray-500">
                forget password?
              </p>

              {/* Form submit button */}
              <Button type="submit" title="Login" />

              <Divider divide="Or Login with social" />

              <button className="flex justify-center input">
                <GoogleIcon />
              </button>
            </div>

            <div className="flex justify-center items-center mb-2">
              <p className="text-gray-500 text-sm text-center">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-[#0D0D0D] hover:text-main active:text-blue-700 transition duration-300 font-bold underline"
                >
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default signUp;
