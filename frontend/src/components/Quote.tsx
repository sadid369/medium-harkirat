import React from "react";

export default function Quote() {
  return (
    <div className="bg-slate-200 h-screen flex justify-center items-center flex-col">
      <div className="flex flex-col justify-center">
        <div className=" text-3xl font-bold max-w-lg">
          "The customer support I received was exceptional. The support team
          went above and beyond to address my concerns"
        </div>
        <div className="max-w-md text-xl font-semibold mt-4">
          Julies Winfield
        </div>
        <div className="max-w-md text-sm font-semibold text-slate-400">
          CEO | Acme corp
        </div>
      </div>
    </div>
  );
}
