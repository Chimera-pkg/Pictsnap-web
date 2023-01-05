import { useState } from "react";
import { DropdownComponentColor, InputComponentDefault } from "../components/InputComponent";
import { LabelInputComponent } from "../components/LabelInputComponent";

export function FrameInput({ value, onChange, deleteItem, color }) {
  const [show, setShow] = useState(true);
  return (
    <div>
      <LabelInputComponent
        title="Frame"
        show={show}
        setShow={setShow}
        deleteItem={deleteItem}
      />
      <div
        className={`overflow-hidden duration-150 ${show ? "h-full" : "h-0"}`}
      >
        <div className="grid grid-cols-4 gap-4">
          <InputComponentDefault
            id="top"
            title="Top"
            type="number"
            onChange={onChange}
            placeholder="px"
            value={value.top}
            required={false}
          />
          <InputComponentDefault
            id="right"
            title="Right"
            type="number"
            onChange={onChange}
            placeholder="px"
            value={value.right}
            required={false}
          />
          <InputComponentDefault
            id="bottom"
            title="Bottom"
            type="number"
            onChange={onChange}
            placeholder="px"
            value={value.bottom}
            required={false}
          />
          <InputComponentDefault
            id="left"
            title="Left"
            type="number"
            onChange={onChange}
            placeholder="px"
            value={value.left}
            required={false}
          />
        </div>
        <div className="grid grid-cols-4 gap-4">
          <InputComponentDefault
            id="width"
            title="Width"
            type="number"
            onChange={onChange}
            placeholder="px"
            value={value.width}
            required={false}
          />
          <InputComponentDefault
            id="height"
            title="Height"
            type="number"
            onChange={onChange}
            placeholder="px"
            value={value.height}
            required={false}
          />
        </div>
        <div className="grid grid-cols-4 gap-4">
          <DropdownComponentColor
            id="groupColor"
            title="Color"
            type="number"
            onChange={onChange}
            items={color}
            placeholder="px"
            value={value.groupColor}
            required={false}
          />
        </div>
        <div className="grid grid-cols-1 gap-4">
          <InputComponentDefault
            id="svg"
            title="SVG"
            type="text"
            onChange={onChange}
            placeholder="<svg></svg>"
            value={value.svg}
            required={false}
          />
        </div>
      </div>
    </div>
  );
}
