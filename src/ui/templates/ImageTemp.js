import logo from "src/assets/images/logo.png";
import example from "src/assets/images/example.jpg";
import { useContext } from "react";
import { RatioTemplateContext } from "src/context/RatioTemplateContext";

export function ImageLogoTemp({ item }) {
  const { ratioTemplate, setRatioTemplate } = useContext(RatioTemplateContext);
  return (
    <div
      className={`absolute overflow-hidden left-[${
        item.left * ratioTemplate
      }px] top-[${item.top * ratioTemplate}px] right-[${
        item.right * ratioTemplate
      }px] bottom-[${item.bottom * ratioTemplate}px] w-[${
        item.width * ratioTemplate
      }px] h-[${item.height * ratioTemplate}px] bg-[#${item.color}] `}
    >
      <img
        src={item.src == "" ? logo : item.src}
        alt="image"
        className="h-full w-auto m-auto"
      />
    </div>
  );
}

export function ImageSquareTemp({ item }) {
  const { ratioTemplate, setRatioTemplate } = useContext(RatioTemplateContext);

  return (
    <div
      className={`absolute overflow-hidden left-[${
        item.left * ratioTemplate
      }px] top-[${item.top * ratioTemplate}px] right-[${
        item.right * ratioTemplate
      }px] bottom-[${item.bottom * ratioTemplate}px] w-[${
        item.width * ratioTemplate
      }px] h-[${item.height * ratioTemplate}px] bg-[#${
        item.color
      }] border border-[#${item.borderColor}] border-[${
        item.borderWidth * ratioTemplate
      }px]`}
    >
      <img
        src={item.src == "" ? example : item.src}
        alt="image"
        className="h-full w-auto m-auto"
      />
    </div>
  );
}

export function ImageSquareRoundedTemp({ item }) {
  const { ratioTemplate, setRatioTemplate } = useContext(RatioTemplateContext);

  return (
    <div
      className={`absolute overflow-hidden left-[${
        item.left * ratioTemplate
      }px] top-[${item.top * ratioTemplate}px] right-[${
        item.right * ratioTemplate
      }px] bottom-[${item.bottom * ratioTemplate}px] w-[${
        item.width * ratioTemplate
      }px] h-[${item.height * ratioTemplate}px] bg-[#${item.color}] rounded-[${
        item.rounded * ratioTemplate
      }px] border border-[#${item.borderColor}] border-[${
        item.borderWidth * ratioTemplate
      }px]`}
    >
      <img
        src={item.src == "" ? example : item.src}
        alt="image"
        className="h-full w-auto m-auto"
      />
    </div>
  );
}

export function ImageCircleTemp({ item }) {
  const { ratioTemplate, setRatioTemplate } = useContext(RatioTemplateContext);

  return (
    <div
      className={`absolute overflow-hidden left-[${
        item.left * ratioTemplate
      }px] top-[${item.top * ratioTemplate}px] right-[${
        item.right * ratioTemplate
      }px] bottom-[${item.bottom * ratioTemplate}px] w-[${
        item.width * ratioTemplate
      }px] h-[${item.height * ratioTemplate}px] bg-[#${
        item.color
      }] rounded-full border border-[#${item.borderColor}] border-[${
        item.borderWidth * ratioTemplate
      }px]`}
    >
      <img
        src={item.src == "" ? example : item.src}
        alt="image"
        className="h-full w-auto m-auto"
      />
    </div>
  );
}
