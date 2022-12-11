import { useState } from "react";

export function FrameInput(value, onChange, deleteItem) {
  const [show, setShow] = useState(true);
  return (
    <div>
      <LabelInputComponent
        title="Frame"
        show={show}
        setShow={setShow}
        deleteItem={deleteItem}
      />
      <div>
        <div className="grid grid-cols-4 gap-4">
          <InputComponentDefault
            id="top"
            title="Top"
            type="number"
            onChange={() => {}}
            placeholder="px"
            required={true}
          />
          <InputComponentDefault
            id="right"
            title="Right"
            type="number"
            onChange={() => {}}
            placeholder="px"
            required={true}
          />
          <InputComponentDefault
            id="bottom"
            title="Bottom"
            type="number"
            onChange={() => {}}
            placeholder="px"
            required={true}
          />
          <InputComponentDefault
            id="left"
            title="Left"
            type="number"
            onChange={() => {}}
            placeholder="px"
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
            required={true}
          />
          <InputComponentDefault
            id="height"
            title="Height"
            type="number"
            onChange={() => {}}
            placeholder="px"
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
            required={true}
          />
        </div>
        <div className="grid grid-cols-4 gap-4">
          <InputComponentDefault
            id="svg"
            title="SVG"
            type="text"
            onChange={() => {}}
            placeholder="<svg></svg>"
            required={true}
          />
        </div>
      </div>
    </div>
  );
}