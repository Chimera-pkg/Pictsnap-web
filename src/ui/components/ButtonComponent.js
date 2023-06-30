import React from "react";

export function ButtonComponentDefault(props) {
  return (
    <button
      type="button"
      onClick={props.onTap}
      className="text-white bg-slate-900 rounded-md border text-md font-medium px-5 h-full"
    >
      {props.title}
    </button>
  );
}

export function ButtonComponentFull(props) {
  return (
    <button
      onClick={props.onTap}
      className="text-white bg-slate-900 rounded-md border text-md font-medium px-5 w-full h-full"
    >
      {props.title}
    </button>
  );
}
