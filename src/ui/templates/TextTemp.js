import { useContext } from "react";
import { RatioTemplateContext } from "src/context/RatioTemplateContext";

export function TextTemp({ item, colors }) {
  const { ratioTemplate, setRatioTemplate } = useContext(RatioTemplateContext);

  return (
    <div
      className={`absolute left-[${item.left * ratioTemplate}px] top-[${item.top * ratioTemplate}px] bottom-[${
        item.bottom * ratioTemplate
      }px] h-[${item.height * ratioTemplate}px] w-[${item.width * ratioTemplate}] text-[#${
        colors[item.groupColor]
      }] overflow-hidden`}
    >
      <p
        className={`text-[${item.fontSize * ratioTemplate}px] text-${
          item.textAlign
        } font-${item.fontWeight}`}
        style={{ fontFamily: item.fontFamily }}
      >
        {item.text}
      </p>
    </div>
  );
}
