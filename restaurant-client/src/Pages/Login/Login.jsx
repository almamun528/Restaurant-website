import { useContext, useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const [captchaValue, setCaptchaValue] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  // login / signIn function from context
  const { signIn } = useContext(AuthContext);

  useEffect(() => {
    loadCaptchaEnginge(6); // Ensure the captcha engine loads properly
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // Firebase authentication function
    signIn(email, password).then((result) => {
      const user = result.user;
      if (user) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      }
    });
  };

  const handleValidateCaptcha = () => {
    if (validateCaptcha(captchaValue)) {
      setDisabled(false);
    } else {
      setDisabled(true);
      alert("Invalid Captcha! Please try again.");
    }
  };

  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex flex-col md:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <form
            onSubmit={handleLogin}
            className="card bg-base-100 w-full shadow-2xl"
          >
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="fieldset-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input w-full"
                  placeholder="Email"
                  required
                />
                <label className="fieldset-label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input w-full"
                  placeholder="Password"
                  required
                />
                <label className="fieldset-label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Type the captcha"
                  value={captchaValue}
                  onChange={(e) => setCaptchaValue(e.target.value)}
                />
                <button
                  type="button"
                  className="btn btn-xs bg-amber-600 mt-2"
                  onClick={handleValidateCaptcha}
                >
                  Validate
                </button>
                <button
                  disabled={disabled}
                  type="submit"
                  className="btn btn-neutral mt-4"
                >
                  Submit
                </button>
              </fieldset>
            </div>
            <p className="mt-2 mb-3 text-center">
              <Link to="/register">
                New here? <b>Register now!</b>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
