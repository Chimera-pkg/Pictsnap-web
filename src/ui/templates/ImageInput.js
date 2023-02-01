import { useState } from "react";
import {
  DropdownComponentColor,
  InputComponentDefault,
} from "../components/InputComponent";
import { LabelInputComponent } from "../components/LabelInputComponent";

export function ImageLogoInput({ value, onChange, deleteItem, color}) {
  const [show, setShow] = useState(true);
  return (
    <div>
      <LabelInputComponent
        title="Image Logo"
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
        <div className="grid grid-cols-3 gap-4">
          <div className="cols-span-2">
            <InputComponentDefault
              id="src"
              title="link Image"
              type="text"
              onChange={onChange}
              placeholder="http://image.com"
              value={value.src}
              required={true}
            />
          </div>
          <InputComponentDefault
            id="imageEditingController"
            title="Editing Controller"
            type="number"
            onChange={onChange}
            placeholder=""
            value={value.imageEditingController}
            required={false}
            hidden={true}
          />
        </div>
      </div>
    </div>
  );
}

export function ImageSquareInput({ value, onChange, deleteItem, color}) {
  const [show, setShow] = useState(true);
  return (
    <div>
      <LabelInputComponent
        title="Image Square"
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
            id="border"
            title="Border"
            type="number"
            onChange={onChange}
            placeholder="px"
            value={value.border}
            required={true}
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="cols-span-2">
            <InputComponentDefault
              id="src"
              title="link Image"
              type="text"
              onChange={onChange}
              placeholder="http://image.com"
              value={value.src}
              required={true}
            />
          </div>
          <InputComponentDefault
            id="imageEditingController"
            title="Editing Controller"
            type="number"
            onChange={onChange}
            placeholder=""
            value={value.imageEditingController}
            required={false}
            hidden={true}
          />
        </div>
      </div>
    </div>
  );
}

export function ImageSquareRoundedInput({
  value,
  onChange,
  deleteItem,
  color,
}) {
  const [show, setShow] = useState(true);
  return (
    <div>
      <LabelInputComponent
        title="Image Square Rounded"
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
            id="border"
            title="Border"
            type="number"
            onChange={onChange}
            placeholder="px"
            value={value.border}
            required={true}
          />
          <InputComponentDefault
            id="rounded"
            title="Rounded"
            type="number"
            onChange={onChange}
            placeholder="px"
            value={value.rounded}
            required={true}
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="cols-span-2">
            <InputComponentDefault
              id="src"
              title="link Image"
              type="text"
              onChange={onChange}
              placeholder="http://image.com"
              value={value.src}
              required={true}
            />
          </div>
          <InputComponentDefault
            id="imageEditingController"
            title="Editing Controller"
            type="number"
            onChange={onChange}
            placeholder=""
            value={value.imageEditingController}
            required={false}
            hidden={true}
          />
        </div>
      </div>
    </div>
  );
}

export function ImageCircleInput({ value, onChange, deleteItem, color }) {
  const [show, setShow] = useState(true);
  return (
    <div>
      <LabelInputComponent
        title="Image Circle"
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
            id="border"
            title="Border"
            type="number"
            onChange={onChange}
            placeholder="px"
            value={value.border}
            required={true}
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="cols-span-2">
            <InputComponentDefault
              id="src"
              title="link Image"
              type="text"
              onChange={onChange}
              placeholder="http://image.com"
              value={value.src}
              required={true}
            />
          </div>
          <InputComponentDefault
            id="imageEditingController"
            title="Editing Controller"
            type="number"
            onChange={onChange}
            placeholder=""
            value={value.imageEditingController}
            required={false}
            hidden={true}
          />
        </div>
      </div>
    </div>
  );
}

export function ImageStaticInput({ value, onChange, deleteItem }) {
  const [show, setShow] = useState(true);
  return (
    <div>
      <LabelInputComponent
        title="Image Static"
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
        <div className="grid grid-cols-1">
          <InputComponentDefault
            id="src"
            title="link Image"
            type="text"
            onChange={onChange}
            placeholder="http://image.com"
            value={value.src}
            required={false}
          />
        </div>
      </div>
    </div>
  );
}
