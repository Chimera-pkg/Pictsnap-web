import SVG from "react-inlinesvg";
import { useContext, useEffect, useState } from "react";
import { RatioTemplateContext } from "src/context/RatioTemplateContext";

export function FrameTemp({ item, colors }) {
  const { ratioTemplate, setRatioTemplate } = useContext(RatioTemplateContext);

  let vertical;
  if (item.top === null || item.top === undefined) {
    vertical = `bottom-[${item.bottom * ratioTemplate}px]`;
  } else {
    vertical = `top-[${item.top * ratioTemplate}px]`;
  }

  return (
    <div
      className={`absolute left-[${item.left * ratioTemplate}px] right-[${item.right * ratioTemplate}px] ${vertical} ${item.height}`}
    >
      <SVG
        src={item.svg}
        width={item.width * ratioTemplate}
        height={item.height * ratioTemplate}
      />
    </div>
  );
}
