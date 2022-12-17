import { useContext } from "react";
import { RatioTemplateContext } from "src/context/RatioTemplateContext";

export function TextTemp({ item, colors }) {
  const { ratioTemplate, setRatioTemplate } = useContext(RatioTemplateContext);
  return (
    <div
      className={`absolute left-[${item.left * ratioTemplate}px] top-[${
        item.top * ratioTemplate
      }px] right-[${item.right * ratioTemplate}px] bottom-[${
        item.bottom * ratioTemplate
      }px] w-[${item.width * ratioTemplate}px] h-[${
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
