export function ContainerSquareTemp({ item }) {
  return (
    <div
      className={`absolute left-[${item.left}px] top-[${item.top}px] right-[${item.right}px] bottom-[${item.bottom}px] w-[${item.width}px] h-[${item.height}px] bg-[#${item.color}] border border-[#${item.borderColor}] border-[${item.borderWidth}px]`}
    ></div>
  );
}

export function ContainerSquareRoundedTemp({ item }) {
  return (
    <div
      className={`absolute left-[${item.left}px] top-[${item.top}px] right-[${item.right}px] bottom-[${item.bottom}px] w-[${item.width}px] h-[${item.height}px] bg-[#${item.color}] rounded-[${item.rounded}px] border border-[#${item.borderColor}] border-[${item.borderWidth}px]`}
    ></div>
  );
}

export function ContainerCircleTemp({ item }) {
  return (
    <div
      className={`absolute left-[${item.left}px] top-[${item.top}px] right-[${item.right}px] bottom-[${item.bottom}px] w-[${item.width}px] h-[${item.height}px] bg-[#${item.color}] rounded-full border border-[#${item.borderColor}] border-[${item.borderWidth}px]`}
    ></div>
  );
}
