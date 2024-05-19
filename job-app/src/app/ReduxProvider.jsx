"use client";
import { store } from "@/store";
import React from "react";
import { Provider } from "react-redux";

function ReduxPeovider({ children }) {
  return (
    <>
      <Provider store={store}>{children}</Provider>
    </>
  );
}

export default ReduxPeovider;
