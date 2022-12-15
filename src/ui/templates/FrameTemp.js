import SVG from "react-inlinesvg";

export function FrameTemp({ item }) {
  return (
    <div
      className={`absolute left-[${item.left}] top-[${item.top}] right-[${item.right}] bottom-[${item.bottom}] w-[${item.width}px] h-[${item.height}px]`}
    >
      <SVG src={item.svg} />
    </div>
  );
}
