import { useContext } from "react";
import { RatioTemplateContext } from "src/context/RatioTemplateContext";

export function ContainerSquareTemp({ item }) {
  const { ratioTemplate, setRatioTemplate } = useContext(RatioTemplateContext);

  return (
    <div
      className={`absolute left-[${item.left * ratioTemplate}px] top-[${
        item.top * ratioTemplate
      }px] right-[${item.right * ratioTemplate}px] bottom-[${
        item.bottom * ratioTemplate
      }px] w-[${item.width * ratioTemplate}px] h-[${
        item.height * ratioTemplate
      }px] bg-[#${item.color}] border border-[#${item.borderColor}] border-[${
        item.borderWidth * ratioTemplate
      }px]`}
    ></div>
  );
}

export function ContainerSquareRoundedTemp({ item }) {
  const { ratioTemplate, setRatioTemplate } = useContext(RatioTemplateContext);

  return (
    <div
      className={`absolute left-[${item.left * ratioTemplate}px] top-[${
        item.top * ratioTemplate
      }px] right-[${item.right * ratioTemplate}px] bottom-[${
        item.bottom * ratioTemplate
      }px] w-[${item.width * ratioTemplate}px] h-[${
        item.height * ratioTemplate
      }px] bg-[#${item.color}] rounded-[${
        item.rounded * ratioTemplate
      }px] border border-[#${item.borderColor}] border-[${
        item.borderWidth * ratioTemplate
      }px]`}
    ></div>
  );
}

export function ContainerCircleTemp({ item }) {
  const { ratioTemplate, setRatioTemplate } = useContext(RatioTemplateContext);

  return (
    <div
      className={`absolute left-[${item.left * ratioTemplate}px] top-[${
        item.top * ratioTemplate
      }px] right-[${item.right * ratioTemplate}px] bottom-[${
        item.bottom * ratioTemplate
      }px] w-[${item.width * ratioTemplate}px] h-[${
        item.height * ratioTemplate
      }px] bg-[#${item.color}] rounded-full border border-[#${
        item.borderColor
      }] border-[${item.borderWidth * ratioTemplate}px]`}
    ></div>
  );
}
