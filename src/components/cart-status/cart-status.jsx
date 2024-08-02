import React from "react";
import { useSelector } from "react-redux";
import { ShoppingCart } from "../../assets/icons/shopping-cart";

export const CartStatus = () => {
  const { totalCount } = useSelector((state) => state.product);

  return (
    <>
      <div className="flex gap-1 relative">
        <ShoppingCart />
        <span className="w-6 h-6 text-center rounded-full bg-red-500 font-bold text-white absolute -right-4 -top-4">
          {totalCount}
        </span>
      </div>
    </>
  );
};