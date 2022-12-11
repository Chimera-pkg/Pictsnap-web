import { useState } from "react";
import { InputComponentDefault } from "../components/InputComponent";
import { LabelInputComponent } from "../components/LabelInputComponent";

export function ContainerSquareInput({ value, onChange, deleteItem }) {
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
            id="border"
            title="Border"
            type="number"
            onChange={() => {}}
            placeholder="px"
            required={true}
          />
        </div>
      </div>
    </div>
  );
}

export function ContainerSquareRoundedInput({ value, onChange, deleteItem }) {
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
            id="border"
            title="Border"
            type="number"
            onChange={() => {}}
            placeholder="px"
            required={true}
          />
          <InputComponentDefault
            id="rounded"
            title="Rounded"
            type="number"
            onChange={() => {}}
            placeholder="px"
            required={true}
          />
        </div>
      </div>
    </div>
  );
}

export function ContainerCircleInput({ value, onChange, deleteItem }) {
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
            id="border"
            title="Border"
            type="number"
            onChange={() => {}}
            placeholder="px"
            required={true}
          />
        </div>
      </div>
    </div>
  );
}
