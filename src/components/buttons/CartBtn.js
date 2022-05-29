import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const CartBtn = () => {
  // We get a state of addItems
  // Write the name of the file not the function
  const state = useSelector((state) => state.addItem);
  return (
    <>
      <NavLink to="/cart" className="btn ms-2">
        <span className="fa fa-3x fa-shopping-cart me-1" style={{color:'#445251'}} ></span> ({state.length})
      </NavLink>
    </>
  );
};

export default CartBtn;
