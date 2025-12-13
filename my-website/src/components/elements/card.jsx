import React from "react";

export function Card({ children, className = "", ...props }) {
  return (
    <div
      {...props}
      className={
        "bg-slate-900 text-slate-100 pixel-card rounded-sm overflow-hidden " +
        (className ? " " + className : "")
      }
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className = "" }) {
  return (
    <div className={"px-3 py-2 border-b border-slate-700 " + className}>
      <div className="font-extrabold text-sm">{children}</div>
    </div>
  );
}

export function CardContent({ children, className = "" }) {
  return <div className={"p-3 text-sm " + className}>{children}</div>;
}

export function CardFooter({ children, className = "" }) {
  return (
    <div className={"px-3 py-2 border-t border-slate-700 flex justify-end " + className}>
      {children}
    </div>
  );
}

export default Card;
