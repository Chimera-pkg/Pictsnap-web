import SVG from "react-inlinesvg";
import { useContext, useEffect, useState } from "react";
import { RatioTemplateContext } from "src/context/RatioTemplateContext";

export function FrameTemp({ item, colors }) {
  const { ratioTemplate, setRatioTemplate } = useContext(RatioTemplateContext);

  return (
    <div
      className={`absolute left-[${
        item.left ?? undefined * ratioTemplate
      }px] right-[${item.right ?? undefined * ratioTemplate}px] top-[${
        item.top ?? undefined * ratioTemplate
      }px] bottom-[${item.bottom ?? undefined * ratioTemplate}px]`}
    >
      <SVG
        src={item.svg}
        width={item.width ?? undefined * ratioTemplate}
        height={item.height ?? undefined * ratioTemplate}
      />
    </div>
  );
}
