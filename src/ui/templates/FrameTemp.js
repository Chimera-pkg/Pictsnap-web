import SVG from "react-inlinesvg";

export function FrameTemp({ item }) {
  return (
    <div
      className={`absolute left-[${item.left}px] top-[${item.top}px] right-[${item.right}px] bottom-[${item.bottom}px] w-[${item.width}px] h-[${item.height}px]`}
    >
      <SVG src={item.svg} />
    </div>
  );
}
