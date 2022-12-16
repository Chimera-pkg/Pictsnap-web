import logo from "src/assets/images/logo.png";
import example from "src/assets/images/example.jpg";

export function ImageLogoTemp({ item }) {
  return (
    <div
      className={`absolute left-[${item.left}] top-[${item.top}] right-[${item.right}] bottom-[${item.bottom}] w-[${item.width}px] h-[${item.height}px] bg-[#${item.color}]`}
    >
      <img src={item.src == "" ? logo : item.src} alt="image" />
    </div>
  );
}

export function ImageSquareTemp({ item }) {
  return (
    <div
      className={`absolute left-[${item.left}] top-[${item.top}] right-[${item.right}] bottom-[${item.bottom}] w-[${item.width}px] h-[${item.height}px] bg-[#${item.color}] border border-[#${item.borderColor}] border-[${item.borderWidth}px]`}
    >
      <img src={item.src == "" ? example : item.src} alt="image" />
    </div>
  );
}

export function ImageSquareRoundedTemp({ item }) {
  return (
    <div
      className={`absolute left-[${item.left}] top-[${item.top}] right-[${item.right}] bottom-[${item.bottom}] w-[${item.width}px] h-[${item.height}px] bg-[#${item.color}] rounded-[${item.rounded}px] border border-[#${item.borderColor}] border-[${item.borderWidth}px]`}
    >
      <img src={item.src == "" ? example : item.src} alt="image" />
    </div>
  );
}

export function ImageCircleTemp({ item }) {
  return (
    <div
      className={`absolute left-[${item.left}] top-[${item.top}] right-[${item.right}] bottom-[${item.bottom}] w-[${item.width}px] h-[${item.height}px] bg-[#${item.color}] rounded-full border border-[#${item.borderColor}] border-[${item.borderWidth}px]`}
    >
      <img src={item.src == "" ? example : item.src} alt="image" />
    </div>
  );
}
