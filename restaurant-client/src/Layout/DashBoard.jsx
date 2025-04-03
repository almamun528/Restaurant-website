import React from "react";
import {
  FaAd,
  FaCalendar,
  FaDatabase,
  FaHome,
  FaSearch,
  FaShoppingCart,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";

const DashBoard = () => {
  const [cart] = useCart();

  return (
    <>
      <section className="flex gap-3">
        {/* dashBoard side bar  */}
        <div className="w-64 min-h-screen bg-orange-400 ">
          <ul className="menu p-4">
            <li>
              <NavLink to="/dashboard/cart">
                <FaShoppingCart /> My Cart ({cart?.length})
              </NavLink>{" "}
            </li>
            <li>
              <NavLink to="/dashboard/userHome">
                <FaHome /> User Home
              </NavLink>{" "}
            </li>
            <li>
              <NavLink to="/dashboard/reservation">
                <FaCalendar /> Reservation
              </NavLink>{" "}
            </li>
            <li>
              <NavLink to="/dashboard/review">
                <FaAd />
                Add a Review
              </NavLink>{" "}
            </li>
            <li>
              <NavLink to="/dashboard/bookings">
                <FaDatabase /> My Bookings
              </NavLink>{" "}
            </li>

            <div className="divider w-full"></div>
            <li>
              <NavLink to="/">
                <FaHome /> Home
              </NavLink>{" "}
            </li>
            <li>
              <NavLink to="/order/salad">
                <FaSearch /> Menu
              </NavLink>{" "}
            </li>
          </ul>
        </div>
        {/* dashboard content  */}
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </section>
    </>
  );
};

export default DashBoard;
