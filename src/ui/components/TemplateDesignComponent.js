export function TemplateDesign({ type }) {
  return (
    <div
      className={`w-[${type.logicWidth}px] h-[${type.logicHeight}px] duration-500 shadow-xl mx-auto relative`}
    ></div>
  );
}
