import React, { forwardRef } from "react";

export const Input = forwardRef(function Input({ className = "", ...props }, ref) {
  return (
    <input
      ref={ref}
      {...props}
      className={
        "px-3 py-2 rounded-none text-sm bg-slate-800 border-4 border-slate-200 outline-none " +
        "focus:border-slate-400 placeholder:opacity-70 w-full pixel-input " +
        className
      }
    />
  );
});

Input.displayName = "Input";
export default Input;
