import SVG from "react-inlinesvg";
import { useContext, useEffect, useState } from "react";
import { RatioTemplateContext } from "src/context/RatioTemplateContext";

export function FrameTemp({ item, colors }) {
  const { ratioTemplate, setRatioTemplate } = useContext(RatioTemplateContext);

  return (
    <div
      className={`absolute left-[${
        item.left == null ? undefined : item.left * ratioTemplate
      }px] top-[${
        item.top == null ? undefined : item.top * ratioTemplate
      }px]`}
    >
      <SVG
        src={item.svg}
        width={item.width == null ? undefined : item.width * ratioTemplate}
        height={item.height == null ? undefined : item.height * ratioTemplate}
      />
    </div>
  );
}
