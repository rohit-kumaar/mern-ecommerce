import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCount } from "./counterSlice";

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return <div></div>;
}
