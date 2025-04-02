import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  //   console.log(watch("example")); // watch input value by passing the name of it

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
                  name="name"
                  {...register("name", { required: true })}
                  className="input"
                  placeholder="Type Your Name"
                />
                {errors.name && (
                  <span className="text-red-400">This field is required</span>
                )}

                <label className="fieldset-label">Email</label>
                <input
                  type="email"
                  name="email"
                  {...register("email", { required: true })}
                  className="input"
                  placeholder="Email"
                />
                {errors.email && (
                  <span className="text-red-500">Write Valid email</span>
                )}
                <label className="fieldset-label">Password</label>
                <input
                  type="password"
                  className="input"
                  {...register("password", { required: true })}
                  placeholder="Password"
                  name="password"
                />
                {errors.password && (
                  <span className="text-red-500">This field is required</span>
                )}
                <button type="submit" className="btn btn-neutral mt-4">
                  Register
                </button>
              </fieldset>
              <p className="mt-2 mb-3 text-center">
                <Link to="/login">
                  Already have an account ? <b> Login now!</b>{" "}
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
