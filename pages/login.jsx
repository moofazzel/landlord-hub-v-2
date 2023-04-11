import Button from "@/components/common/Button";

import Divider from "@/components/common/Divider";
import GoogleIcon from "@/components/icons/GoogleIcon";
import MainLayout from "@/components/layouts/main/mainLayout";
import Image from "next/image";
import Link from "next/link";
import { useForm, Resolver } from "react-hook-form";
import loginImage from "../public/Assets/images/login.svg";
import GoogleSignInBtn, {
  GoogleSignUp,
} from "@/components/common/GoogleSignIn";
import { auth, signInWithEmailAndPassword } from "../firebase/firebase.config";
import { login } from "@/features/userSlice";
import { useRouter } from "next/router";

function Login() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userAuth) => {
        // dispatch(
        //   login({
        //     email: userAuth.user.email,
        //     uid: userAuth.user.uid,
        //     displayName: userAuth.user.displayName,
        //     photoUrl: userAuth.user.photoURL,
        //   })
        // );
        userAuth && router.push("/dashboard");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <>
      <section className="lg:w-[1280px] mx-auto my-20 px-5">
        <div className="lg:flex flex-row-reverse lg:bg-[#F3F4FC] rounded-[30px]">
          <div className="flex-1 flex justify-center items-center lg:px-10">
            <Image src={loginImage} alt="" priority />
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex-1  bg-white rounded-[30px] lg:mainShadow mx-auto md:p-8"
          >
            <h4 className="text-black text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8">
              Login
            </h4>
            <p className="text-center text-lh-grey-100">
              Please Enter Your Details
            </p>
            <div className="flex flex-col gap-4 p-4 md:px-8 md:pt-8">
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

              <Divider divide="Or" />

              {/* Google sign in button */}
              <GoogleSignInBtn />
            </div>

            <div className="flex justify-center items-center mb-2">
              <p className="text-gray-500 text-sm text-center">
                Don&apos;t an account?{" "}
                <Link
                  href="/signup"
                  className="text-[#0D0D0D] hover:text-main active:text-blue-700 transition duration-300 font-bold underline"
                >
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

Login.Layout = MainLayout;

export default Login;
