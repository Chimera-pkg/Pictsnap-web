import SVG from "react-inlinesvg";
import { useContext, useState } from "react";
import { RatioTemplateContext } from "src/context/RatioTemplateContext";

export function FrameTemp({ item }) {
  const { ratioTemplate, setRatioTemplate } = useContext(RatioTemplateContext);

  return (
    <div
      className={`absolute left-[${item.left * ratioTemplate}px] top-[${
        item.top * ratioTemplate
      }px] right-[${item.right * ratioTemplate}px] bottom-[${
        item.bottom * ratioTemplate
      }px] w-[${item.width * ratioTemplate}px] h-[${
        item.height * ratioTemplate
      }px] scale-[${ratioTemplate * 100}%] translate-y-[${
        (100 - ratioTemplate * 100) / 2
      }%] -translate-x-[${(100 - ratioTemplate * 100) / 2}%]`}
    >
      <SVG src={item.svg} />
    </div>
  );
}
