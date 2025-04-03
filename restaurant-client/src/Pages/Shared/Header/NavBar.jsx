import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "/logo.png";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { FaShoppingCart } from "react-icons/fa";

function NavBar() {
  const { user, logOut } = useContext(AuthContext);
  //  const { displayName, email, photoURL } = user;
  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "You are log out",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => console.log(error)); // Fixed error handling
  };

  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order/salad">Order</Link>
      </li>
      <li>
        <Link to="/secret">Private route</Link>
      </li>
      <li>
        <Link to="/">
          <button className="btn -mt-2">
            <FaShoppingCart />{" "}
            <div className="badge badge-sm badge-secondary">+0</div>
          </button>
        </Link>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar shadow-sm bg-black fixed text-white z-10 max-w-screen-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              {menuItems}
            </ul>
          </div>
          <Link to="/">
            <img className="w-[80px]" src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </div>
        <div className="navbar-end">
          {user && (
            <div className="relative group">
              <p className="mr-2 cursor-pointer">{user?.displayName}</p>
              <p className="absolute left-0 top-full mt-1 w-max px-2 py-1 text-sm text-white bg-gray-800 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {user?.email}
              </p>
            </div>
          )}
          {/* logOut button  */}
          {user ? (
            <button
              onClick={handleLogout}
              className="btn btn-ghost border-amber-50"
            >
              Log Out
            </button>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </div>
      <br />
      <br />
      <div className="w-2 md:h-[15px] lg:h-[17px]"></div>
    </>
  );
}

export default NavBar;
