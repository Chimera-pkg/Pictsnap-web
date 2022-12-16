export function TextTemp({ item }) {
  return (
    <div
      className={`absolute left-[${item.left}] top-[${item.top}] right-[${item.right}] bottom-[${item.bottom}] w-[${item.width}px] h-[${item.height}px] text-[#${item.color}] `}
    >
      <p
        className={`font-[${item.fontSize}px] text-${item.textAlign} font-${item.fontWeight}`}
      >
        {item.text}
      </p>
    </div>
  );
}
