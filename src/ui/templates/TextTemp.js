import { useContext } from "react";
import { RatioTemplateContext } from "src/context/RatioTemplateContext";

export function TextTemp({ item, colors }) {
  const { ratioTemplate, setRatioTemplate } = useContext(RatioTemplateContext);

  let width = item.width * ratioTemplate;
  if (width < 0 || isNaN(width)) {
    width = 0;
  }

  let height = item.height * ratioTemplate;
  if (height < 0 || isNaN(height)) {
    height = 0;
  }

  return (
    <div
      className={`absolute left-[${item.left * ratioTemplate}px] top-[${
        item.top * ratioTemplate
      }px] bottom-[${item.bottom * ratioTemplate}px] h-[${
        height
      }px] w-[${width}px] text-[#${
        colors[item.groupColor]
      }] overflow-hidden`}
    >
      <p
        className={`text-[${item.fontSize * ratioTemplate}px] text-${
          item.textAlign
        } font-${item.fontWeight} text-${item.textAlign} font-${
          item.fontWeight
        } `}
        style={{ fontFamily: item.fontFamily }}
      >
        {item.text}
      </p>
    </div>
  );
}
