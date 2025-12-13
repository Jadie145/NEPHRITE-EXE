import React, { forwardRef } from "react";

export const Button = forwardRef(function Button(
  { children, className = "", square = false, ...props },
  ref
) {
  return (
    <button
      ref={ref}
      {...props}
      className={
        "inline-flex items-center justify-center gap-2 px-3 py-2 font-bold text-sm leading-none transition-all " +
        "bg-slate-800 hover:bg-slate-700 text-white pixel-button " +
        (square ? "p-2 w-12 h-12" : "") +
        (className ? " " + className : "")
      }
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";
export default Button;
