import React from "react";
import {
  FaAd,
  FaCalendar,
  FaDatabase,
  FaEnvelope,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";

const DashBoard = () => {
  const [cart] = useCart();
  // TODO : get admin value from database
  const isAdmin = true;

  return (
    <>
      <section className="flex gap-3">
        {/* dashBoard side bar  */}
        <div className="w-64 min-h-screen bg-orange-400 ">
          <ul className="menu p-4">
            {isAdmin ? (
              <>
                <li>
                  <NavLink to="/dashboard/adminHome">
                    <FaHome /> Admin Home
                  </NavLink>{" "}
                </li>
                <li>
                  <NavLink to="/dashboard/addItems">
                    <FaUtensils /> Add Items
                  </NavLink>{" "}
                </li>

                <li>
                  <NavLink to="/dashboard/manageItems">
                    <FaList /> Manage Items
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/bookings">
                    <FaAd />
                    Manage Bookings
                  </NavLink>{" "}
                </li>
                <li>
                  <NavLink to="/dashboard/users">
                    <FaUsers /> All Users
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                {" "}
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
              </>
            )}
            {/* shared common navLinks */}
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

            <li>
              <NavLink to="/order/contact">
                <FaEnvelope /> Contact
              </NavLink>
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
