import { useContext } from "react";
import { RatioTemplateContext } from "src/context/RatioTemplateContext";

export function ContainerSquareTemp({ item, colors }) {
  const { ratioTemplate, setRatioTemplate } = useContext(RatioTemplateContext);

  return (
    <div
      className={`absolute left-[${item.left * ratioTemplate}px] top-[${
        item.top * ratioTemplate
      }px] right-[${item.right * ratioTemplate}px] bottom-[${
        item.bottom * ratioTemplate
      }px] w-[${item.width * ratioTemplate}px] h-[${
        item.height * ratioTemplate
      }px] bg-[#${colors[item.groupColor]}] border border-[#${
        colors[item.groupColor]
      }] border-[${item.border * ratioTemplate}px]`}
    ></div>
  );
}

export function ContainerSquareRoundedTemp({ item, colors }) {
  const { ratioTemplate, setRatioTemplate } = useContext(RatioTemplateContext);

  return (
    <div
      className={`absolute left-[${item.left * ratioTemplate}px] top-[${
        item.top * ratioTemplate
      }px] right-[${item.right * ratioTemplate}px] bottom-[${
        item.bottom * ratioTemplate
      }px] w-[${item.width * ratioTemplate}px] h-[${
        item.height * ratioTemplate
      }px] bg-[#${colors[item.groupColor]}] rounded-[${
        item.rounded * ratioTemplate
      }px] border border-[#${colors[item.groupColor]}] border-[${
        item.border * ratioTemplate
      }px]`}
    ></div>
  );
}

export function ContainerCircleTemp({ item, colors }) {
  const { ratioTemplate, setRatioTemplate } = useContext(RatioTemplateContext);

  return (
    <div
      className={`absolute left-[${item.left * ratioTemplate}px] top-[${
        item.top * ratioTemplate
      }px] right-[${item.right * ratioTemplate}px] bottom-[${
        item.bottom * ratioTemplate
      }px] w-[${item.width * ratioTemplate}px] h-[${
        item.height * ratioTemplate
      }px] bg-[#${colors[item.groupColor]}] rounded-full border border-[#${
        colors[item.groupColor]
      }] border-[${item.border * ratioTemplate}px]`}
    ></div>
  );
}
