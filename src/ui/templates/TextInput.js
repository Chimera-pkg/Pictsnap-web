import { useState } from "react";
import { DropdownComponentColor, DropdownComponentDefault, InputComponentDefault } from "../components/InputComponent";
import { LabelInputComponent } from "../components/LabelInputComponent";

export function TextInput({ value, onChange, deleteItem, color, align, fontWeight, fontFamily, fontSize }) {
  const [show, setShow] = useState(true);
  return (
    <div>
      <LabelInputComponent
        title="Text"
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
            placeholder="px"
            value={value.groupColor}
            required={false}
            items={color}
          />
        </div>
        <div className="grid grid-cols-4 gap-4">
          <DropdownComponentDefault
            id="fontSize"
            title="Font Size"
            type="number"
            onChange={onChange}
            placeholder=""
            value={value.fontSize}
            required={false}
            items={fontSize}
          />
          <DropdownComponentDefault
            id="textAlign"
            title="Text Align"
            type="text"
            onChange={onChange}
            placeholder=""
            value={value.textAlign}
            required={false}
            items={align}
          />
          <DropdownComponentDefault
            id="fontWeight"
            title="Font Weight"
            type="text"
            onChange={onChange}
            placeholder=""
            value={value.fontWeight}
            required={false}
            items={fontWeight}
          />
          <DropdownComponentDefault
            id="fontFamily"
            title="Font Family"
            type="text"
            onChange={onChange}
            placeholder=""
            value={value.fontFamily}
            required={false}
            items={fontFamily}
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="cols-span-2">
            <InputComponentDefault
              id="text"
              title="Text"
              type="text"
              onChange={onChange}
              placeholder=""
              value={value.text}
              required={false}
            />
          </div>
          <InputComponentDefault
            id="textController"
            title="Editing Controller"
            type="number"
            onChange={onChange}
            placeholder=""
            value={value.textController}
            required={false}
            hidden={true}
          />
        </div>
      </div>
    </div>
  );
}
