export function TextTemp({ item }) {
  return (
    <div
      className={`absolute left-[${item.left}px] top-[${item.top}px] right-[${item.right}px] bottom-[${item.bottom}px] w-[${item.width}px] h-[${item.height}px] text-[#${item.color}] `}
    >
      <p
        className={`text-[${item.fontSize}px] text-${item.textAlign} font-${item.fontWeight}`}
      >
        {item.text}
      </p>
    </div>
  );
}
