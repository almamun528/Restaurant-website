import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SocialLogin from "../../Components/SocialLogin";

function Register() {
  const axiosPublic = useAxiosPublic();

  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser, " user is login");

      //! bring the user update function from context
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          const userInfo = { name: data.name, email: data.email };

          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log("user add into dataBase ", userInfo);
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your account is created",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
          navigate("/");
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <fieldset className="fieldset">
                <label className="fieldset-label">Full Name</label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  className="input"
                  placeholder="Type Your Name"
                />
                {errors.name && (
                  <span className="text-red-400">This field is required</span>
                )}
                <label className="fieldset-label">Photo URl</label>
                <input
                  type="text"
                  {...register("photoURL", { required: true })}
                  className="input"
                  placeholder="Photo URL"
                />
                {errors.photoURL && (
                  <span className="text-red-400">Image is required</span>
                )}

                <label className="fieldset-label">Email</label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: /^\S+@\S+\.\S+$/,
                  })}
                  className="input"
                  placeholder="Email"
                />
                {errors.email && (
                  <span className="text-red-500">Enter a valid email</span>
                )}

                <label className="fieldset-label">Password</label>
                <input
                  type="password"
                  className="input"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                    maxLength: {
                      value: 15,
                      message: "Password must be under 15 characters",
                    },
                  })}
                  placeholder="Password"
                />
                {errors.password && (
                  <span className="text-red-500">
                    {errors.password.message}
                  </span>
                )}
                <button type="submit" className="btn btn-neutral mt-4">
                  Register
                </button>
              </fieldset>
              <p className="mt-2 mb-3 text-center">
                <Link to="/login">
                  Already have an account? <b>Login now!</b>
                </Link>
              </p>
              <span className="mx-auto my-2">
                {" "}
                <SocialLogin />
              </span>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
