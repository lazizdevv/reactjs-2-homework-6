import React from "react";
import { Link } from "react-router-dom";
import { CartStatus } from "../../components/cart-status";

export const Header = () => {
  return (
    <>
      <div className="container mb-10">
        <div className="flex items-center justify-between gap-5 py-8 px-5">
          <div className="flex gap-5 w-1/2 font-bold text-lg">
            <Link to={"/"}>Home</Link>
            <Link to={"products"}>Products</Link>
          </div>
          <div className=" p-1">
            <Link to={"cart"}>
              <CartStatus />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};