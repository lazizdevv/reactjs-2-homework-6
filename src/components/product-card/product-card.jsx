import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addProduct } from "../../redux/products/product-reducer";
import { ShoppingCart } from "../../assets/icons/shopping-cart";
import { PlusCart } from "../../assets/icons/plus-cart";

export const ProductCard = ({ id, price, count, name, img }) => {
  const dispatch = useDispatch();

  const buyProduct = () => {
    dispatch(addProduct({ name, price, count, img, id }));
  };
  return (
    <div className="flex justify-center">
      <div className="border-2 p-5 pt-10 max-w-[300px] w-full relative rounded-lg shadow-xl hover:shadow-2xl cursor-pointer hover:scale-105 transition-all">
        <img className="mb-2 w-[256px] h-[256px] border-2" src={img} alt="img" />
        <h1 className="font-bold w-[250px] h-10 text-base text-[#333]">{name}</h1>
        <p className="font-extrabold text-2xl py-1 my-2 text-center">
          {price}$
        </p>
        <p className="absolute font-bold text-lg text-white left-0 top-0 py-1 px-6 rounded-ss-lg rounded-ee-lg bg-blue-400">
          {count}
        </p>

        <div className="flex justify-between items-center">
          <div className="">
            <button
              className="py-2 px-5 stroke-black stroke-[0.5] bg-green-500 rounded-lg h-fit"
              onClick={buyProduct}
            >
              <PlusCart />
            </button>
            <p className="p-0 m-0 font-semibold text-sm text-center">
              add to cart
            </p>
          </div>
          <Link to={"/cart"}>
            <button className="py-2 px-5 bg-blue-500 rounded-lg h-fit">
              <ShoppingCart />
            </button>
            <p className="p-0 m-0 font-semibold text-sm text-center">
              go to cart
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};