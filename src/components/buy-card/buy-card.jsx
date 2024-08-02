import React from "react";
import { useDispatch } from "react-redux";
import {
  toggleAmount,
  removeProduct,
} from "../../redux/products/product-reducer";
import { Xcart } from "../../assets/icons/x-cart";

export const BuyCard = ({ img, name, count, id, userPrice, userCount }) => {
  const dispatch = useDispatch();

  const changeProductPrice = (type = undefined) => {
    dispatch(toggleAmount({ id, type }));
  };
  return (
    <>
      <div className="container">
        <div className="border-2 p-5 pt-10 max-w-[400px] w-full relative rounded-lg shadow-xl">
          <img className="mb-2 mx-auto" src={img} alt="img" />
          <h1 className="font-bold text-base text-[#333] max-w-[250px]">
            {name}
          </h1>
          <p className="font-extrabold text-3xl py-1 my-2 text-center">
            {userPrice}$
          </p>
          <p className="absolute font-bold text-lg text-white left-0 top-0 py-1 px-6 rounded-ss-lg rounded-ee-lg bg-blue-400">
            {count}
          </p>

          <div className="flex justify-between items-center gap-5 my-5">
            <div className="flex font-mono font-bold">
              <button
                className="py-2 px-5 border-2 rounded-s-lg hover:bg-[#ccc]"
                onClick={() => changeProductPrice("remove")}
              >
                -
              </button>
              <span className=" py-2 px-5 border-2">{userCount}</span>
              <button
                className="py-2 px-5 border-2 rounded-e-lg hover:bg-[#ccc]"
                onClick={() => changeProductPrice("add")}
              >
                +
              </button>
            </div>

            <button
              className="py-2 px-5 bg-red-500 hover:bg-red-700 rounded-lg text-white"
              onClick={() => dispatch(removeProduct(id))}
            >
              <Xcart />
            </button>
          </div>

          <div className="flex justify-center items-center mt-5">
            <button className="rounded-lg py-4 px-10 bg-green-500 hover:bg-green-700 hover:scale-105 text-white font-bold">
              BUY
            </button>
          </div>
        </div>
      </div>
    </>
  );
};