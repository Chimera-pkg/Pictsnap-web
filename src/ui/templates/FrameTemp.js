import SVG from "react-inlinesvg";
import { useContext, useEffect, useState } from "react";
import { RatioTemplateContext } from "src/context/RatioTemplateContext";

export function FrameTemp({ item, colors }) {
  const { ratioTemplate, setRatioTemplate } = useContext(RatioTemplateContext);

  return (
    <div
      className={`absolute left-[${item.left * ratioTemplate}px] top-[${
        item.top * ratioTemplate
      }px] right-[${item.right * ratioTemplate}px] bottom-[${
        item.bottom * ratioTemplate
      }px] `}
    >
      <SVG
        src={item.svg}
        width={item.width * ratioTemplate}
        height={item.height * ratioTemplate}
      />
    </div>
  );
}
