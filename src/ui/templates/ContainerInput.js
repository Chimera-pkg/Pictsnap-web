import { useState } from "react";
import { DropdownComponentColor, InputComponentDefault } from "../components/InputComponent";
import { LabelInputComponent } from "../components/LabelInputComponent";

export function ContainerSquareInput({ value, onChange, deleteItem, color }) {
  const [show, setShow] = useState(true);
  return (
    <div>
      <LabelInputComponent
        title="Container Square"
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
          <InputComponentDefault
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
          <InputComponentDefault
            id="border"
            title="Border"
            type="number"
            onChange={onChange}
            placeholder="px"
            value={value.border}
            required={false}
          />
        </div>
      </div>
    </div>
  );
}

export function ContainerSquareRoundedInput({ value, onChange, deleteItem,color }) {
  const [show, setShow] = useState(true);

  return (
    <div>
      <LabelInputComponent
        title="Container Square Rounded"
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
            placeholder="px"
            value={value.groupColor}
            required={false}
            items={color}
          />
        </div>
        <div className="grid grid-cols-4 gap-4">
          <InputComponentDefault
            id="border"
            title="Border"
            type="number"
            onChange={onChange}
            placeholder="px"
            value={value.border}
            required={false}
          />
          <InputComponentDefault
            id="rounded"
            title="Rounded"
            type="number"
            onChange={onChange}
            placeholder="px"
            value={value.rounded}
            required={false}
          />
        </div>
      </div>
    </div>
  );
}

export function ContainerCircleInput({ value, onChange, deleteItem, color }) {
  const [show, setShow] = useState(true);
  return (
    <div>
      <LabelInputComponent
        title="Container Circle"
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
          <InputComponentDefault
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
          <InputComponentDefault
            id="border"
            title="Border"
            type="number"
            onChange={onChange}
            placeholder="px"
            value={value.border}
            required={false}
          />
        </div>
      </div>
    </div>
  );
}
