import { useState } from "react";
import { InputComponentDefault } from "../components/InputComponent";
import { LabelInputComponent } from "../components/LabelInputComponent";

export function TextInput({ value, onChange, deleteItem }) {
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
            onChange={() => {}}
            placeholder="px"
            value={value.top}
            required={true}
          />
          <InputComponentDefault
            id="right"
            title="Right"
            type="number"
            onChange={() => {}}
            placeholder="px"
            value={value.right}
            required={true}
          />
          <InputComponentDefault
            id="bottom"
            title="Bottom"
            type="number"
            onChange={() => {}}
            placeholder="px"
            value={value.bottom}
            required={true}
          />
          <InputComponentDefault
            id="left"
            title="Left"
            type="number"
            onChange={() => {}}
            placeholder="px"
            value={value.left}
            required={true}
          />
        </div>
        <div className="grid grid-cols-4 gap-4">
          <InputComponentDefault
            id="width"
            title="Width"
            type="number"
            onChange={() => {}}
            placeholder="px"
            value={value.width}
            required={true}
          />
          <InputComponentDefault
            id="height"
            title="Height"
            type="number"
            onChange={() => {}}
            placeholder="px"
            value={value.height}
            required={true}
          />
        </div>
        <div className="grid grid-cols-4 gap-4">
          <InputComponentDefault
            id="groupColor"
            title="Color"
            type="number"
            onChange={() => {}}
            placeholder="px"
            value={value.groupColor}
            required={true}
          />
        </div>
        <div className="grid grid-cols-4 gap-4">
          <InputComponentDefault
            id="fontSize"
            title="Font Size"
            type="number"
            onChange={() => {}}
            placeholder="px"
            value={value.fontSize}
            required={true}
          />
          <InputComponentDefault
            id="textAlign"
            title="Text Align"
            type="text"
            onChange={() => {}}
            placeholder=""
            value={value.textAlign}
            required={true}
          />
          <InputComponentDefault
            id="fontWeight"
            title="Font Weight"
            type="text"
            onChange={() => {}}
            placeholder=""
            value={value.fontWeight}
            required={true}
          />
          <InputComponentDefault
            id="fontFamily"
            title="Font Family"
            type="text"
            onChange={() => {}}
            placeholder=""
            value={value.fontFamily}
            required={true}
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="cols-span-2">
            <InputComponentDefault
              id="text"
              title="Text"
              type="text"
              onChange={() => {}}
              placeholder=""
              value={value.text}
              required={true}
            />
          </div>
          <InputComponentDefault
            id="textController"
            title="Editing Controller"
            type="number"
            onChange={() => {}}
            placeholder=""
            value={value.textController}
            required={true}
          />
        </div>
      </div>
    </div>
  );
}
