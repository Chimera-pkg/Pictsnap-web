import logo from "src/assets/images/logo.png";
import example from "src/assets/images/example.jpg";
import { useContext } from "react";
import { RatioTemplateContext } from "src/context/RatioTemplateContext";

export function ImageLogoTemp({ item, colors }) {
  const { ratioTemplate, setRatioTemplate } = useContext(RatioTemplateContext);
  return (
    <div
      className={`absolute overflow-hidden left-[${
        item.left * ratioTemplate
      }px] top-[${item.top * ratioTemplate}px] right-[${
        item.right * ratioTemplate
      }px] bottom-[${item.bottom * ratioTemplate}px] w-[${
        item.width * ratioTemplate
      }px] h-[${item.height * ratioTemplate}px] bg-opacity-0
      }] `}
    >
      <img
        src={item.src == "" ? logo : item.src}
        alt="image"
        className="h-full w-auto m-auto"
      />
    </div>
  );
}

export function ImageSquareTemp({ item, colors }) {
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
        colors[item.groupColor]
      }] border border-[#${colors[item.groupColor]}] border-[${
        item.border * ratioTemplate
      }px]`}
    >
      <img
        src={item.src == "" ? example : item.src}
        alt="image"
        className="h-full w-full m-auto object-cover"
      />
    </div>
  );
}

export function ImageSquareRoundedTemp({ item, colors }) {
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
        colors[item.groupColor]
      }] rounded-[${item.rounded * ratioTemplate}px] border border-[#${
        colors[item.groupColor]
      }] border-[${item.border * ratioTemplate}px]`}
    >
      <img
        src={item.src == "" ? example : item.src}
        alt="image"
        className="h-full w-full m-auto object-cover"
      />
    </div>
  );
}

export function ImageCircleTemp({ item, colors }) {
  const { ratioTemplate, setRatioTemplate } = useContext(RatioTemplateContext);
  let horizontal;
  if (item.left == null) {
    horizontal = `right-[${item.right * ratioTemplate}px]`;
  } else {
    horizontal = `left-[${item.left * ratioTemplate}px]`;
  }

  return (
    <div
      className={`absolute overflow-hidden ${horizontal} top-[${item.top * ratioTemplate}px] bottom-[${item.bottom * ratioTemplate}px] w-[${
        item.width * ratioTemplate
      }px] h-[${item.height * ratioTemplate}px] bg-[#${
        colors[item.groupColor]
      }] rounded-full border border-[#${colors[item.groupColor]}] border-[${
        item.border * ratioTemplate
      }px]`}
    >
      <img
        src={item.src == "" ? example : item.src}
        alt="image"
        className="h-full w-full m-auto object-cover"
      />
    </div>
  );
}
