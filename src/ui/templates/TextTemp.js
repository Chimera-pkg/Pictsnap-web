import { useContext } from "react";
import { RatioTemplateContext } from "src/context/RatioTemplateContext";

export function TextTemp({ item, colors }) {
  const { ratioTemplate, setRatioTemplate } = useContext(RatioTemplateContext);
  let vertical;
  if (item.top === null || item.top === undefined) {
    vertical = `bottom-[${item.bottom * ratioTemplate}px]`;
  } else {
    vertical = `top-[${item.top * ratioTemplate}px]`;
  }

  return (
    <div
      className={`absolute left-[${item.left * ratioTemplate}px] right-[${item.right * ratioTemplate}px] ${vertical} w-[${item.width * ratioTemplate}px] h-[${
        item.height * ratioTemplate
      }px] text-[#${colors[item.groupColor]}] `}
    >
      <p
        className={`text-[${item.fontSize * ratioTemplate}px] text-${
          item.textAlign
        } font-${item.fontWeight}`}
      >
        {item.text}
      </p>
    </div>
  );
}
