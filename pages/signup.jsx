import Button from "@/components/common/Button";
import Divider from "@/components/common/Divider";
import Image from "next/image";
import Link from "next/link";
import { useForm, Resolver } from "react-hook-form";
import signUpImage from "../public/Assets/images/signup.svg";
import {
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "../firebase/firebase.config";
import { useRouter } from "next/router";
import GoogleSignInBtn from "@/components/common/GoogleSignIn";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useSaveUserMutation } from "@/features/api/apiSlice";

function SignUp() {
  const [loading, setLoading] = useState(false);
  // Save user to DB
  const [saveUserDB, { isSuccess }] = useSaveUserMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success("User Created", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        progress: undefined,
        theme: "colored",
      });
      router.push("/dashboard");
    }
  }, [isSuccess]);

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    setLoading(true);

    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userAuth) => {
        updateProfile(userAuth.user, {
          displayName: data.fullName,
          photoURL:
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
        })
          .then(() => {
            setLoading(false);
          })
          .catch((error) => {
            setLoading(false);
            toast.warn(error, {
              position: "top-center",
              autoClose: 4000,
              hideProgressBar: true,
              progress: undefined,
              theme: "colored",
            });
          });

        const userInfo = {
          name: data.displayName,
          email: data.email,
          avatar:
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
          role: "user",
          createdAt: new Date(),
          method: "register",
        };

        // Save user to DB
        saveUserDB(userInfo);

        // router.push("/dashboard");
      })
      .catch((err) => {
        setLoading(false);

        if (err.message === "Firebase: Error (auth/email-already-in-use).") {
          toast.warning(
            "The email address is already in use by another account.",
            {
              position: "top-center",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            }
          );
        }
      });
  };

  // Custom password validation rule
  const validatePassword = (value) => {
    if (!/(?=.*[a-z])/.test(value)) {
      return "Password must contain at least one lowercase letter";
    }
    if (!/(?=.*[A-Z])/.test(value)) {
      return "Password must contain at least one uppercase letter";
    }
    if (!/(?=.*\d.*\d)/.test(value)) {
      return "Password must contain at least two numbers";
    }
    if (!/(?=.*[!@#$%^&*])/.test(value)) {
      return "Password must contain at least one special character";
    }
    if (value.length < 8 || value.length > 20) {
      return "Password must be between 8 and 20 characters";
    }
    return true;
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
                  {...register("fullName", {
                    required: "Full Name is required",
                    minLength: {
                      value: 5,
                      message: "Full Name must be at least 5 characters long",
                    },
                    maxLength: {
                      value: 100,
                      message: "Full Name cannot exceed 100 characters",
                    },
                    pattern: {
                      value: /^[a-zA-Z\s]+$/,
                      message: "Full Name can only contain letters and spaces",
                    },
                  })}
                  className={errors.fullName ? "input-error" : "input "}
                  placeholder="Full Name"
                  type="text"
                />
                {errors.fullName && (
                  <span className="text-red-400 my-2">
                    {errors.fullName.message}
                  </span>
                )}
              </div>

              <div>
                <input
                  {...register("email", {
                    required: "Email is required", // Add required validation
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className={errors.email ? "input-error" : "input "}
                  placeholder="Email"
                  type="email"
                />
                {errors.email && (
                  <span className="text-red-400 my-2">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div>
                <input
                  onChange={validatePassword}
                  {...register("password", {
                    required: "Password is required",
                    validate: validatePassword, // Add custom validation rule
                  })}
                  type="password"
                  className={errors.password ? "input-error" : "input "}
                  placeholder="Password"
                />

                {/* Display password errors individually */}

                {errors.password?.types?.required && (
                  <span className="text-red-400 my-2">
                    {errors.password.message}
                  </span>
                )}
                {errors.password && (
                  <p className="text-red-400 my-2">{errors.password.message}</p>
                  // <span className="text-red-400 my-2">{error}</span>
                )}
              </div>
              <p className="text-right hover:text-black cursor-pointer hover:underline text-gray-500">
                forget password?
              </p>

              {/* Form submit button */}
              <Button type="submit" title="Sign Up" loading={loading} />

              <Divider divide="Or Login with social" />

              {/* Google sign in button */}
              <GoogleSignInBtn />
            </div>

            <div className="flex justify-center items-center mb-2">
              <p className="text-gray-500 text-sm text-center">
                Already have an account?
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

export default SignUp;
