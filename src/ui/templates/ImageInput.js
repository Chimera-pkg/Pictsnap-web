import { useState } from "react";
import { InputComponentDefault } from "../components/InputComponent";
import { LabelInputComponent } from "../components/LabelInputComponent";

export function ImageLogoInput({ value, onChange, deleteItem }) {
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
            id="title-value"
            title="Top"
            type="number"
            onChange={() => {}}
            placeholder="px"
            required={true}
          />
          <InputComponentDefault
            id="title-value"
            title="Right"
            type="number"
            onChange={() => {}}
            placeholder="px"
            required={true}
          />
          <InputComponentDefault
            id="title-value"
            title="Bottom"
            type="number"
            onChange={() => {}}
            placeholder="px"
            required={true}
          />
          <InputComponentDefault
            id="title-value"
            title="Left"
            type="number"
            onChange={() => {}}
            placeholder="px"
            required={true}
          />
        </div>
        <div className="grid grid-cols-4 gap-4">
          <InputComponentDefault
            id="title-value"
            title="Width"
            type="number"
            onChange={() => {}}
            placeholder="px"
            required={true}
          />
          <InputComponentDefault
            id="title-value"
            title="Height"
            type="number"
            onChange={() => {}}
            placeholder="px"
            required={true}
          />
        </div>
        <div className="grid grid-cols-4 gap-4">
          <InputComponentDefault
            id="title-value"
            title="Color"
            type="number"
            onChange={() => {}}
            placeholder="px"
            required={true}
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="cols-span-2">
            <InputComponentDefault
              id="title-value"
              title="link Image"
              type="text"
              onChange={() => {}}
              placeholder="http://image.com"
              required={true}
            />
          </div>
          <InputComponentDefault
            id="title-value"
            title="Editing Controller"
            type="number"
            onChange={() => {}}
            placeholder=""
            required={true}
          />
        </div>
      </div>
    </div>
  );
}

export function ImageSquareTemp({ value, onChange, deleteItem }) {
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
            id="title-value"
            title="Top"
            type="number"
            onChange={() => {}}
            placeholder="px"
            required={true}
          />
          <InputComponentDefault
            id="title-value"
            title="Right"
            type="number"
            onChange={() => {}}
            placeholder="px"
            required={true}
          />
          <InputComponentDefault
            id="title-value"
            title="Bottom"
            type="number"
            onChange={() => {}}
            placeholder="px"
            required={true}
          />
          <InputComponentDefault
            id="title-value"
            title="Left"
            type="number"
            onChange={() => {}}
            placeholder="px"
            required={true}
          />
        </div>
        <div className="grid grid-cols-4 gap-4">
          <InputComponentDefault
            id="title-value"
            title="Width"
            type="number"
            onChange={() => {}}
            placeholder="px"
            required={true}
          />
          <InputComponentDefault
            id="title-value"
            title="Height"
            type="number"
            onChange={() => {}}
            placeholder="px"
            required={true}
          />
        </div>
        <div className="grid grid-cols-4 gap-4">
          <InputComponentDefault
            id="title-value"
            title="Color"
            type="number"
            onChange={() => {}}
            placeholder="px"
            required={true}
          />
        </div>
        <div className="grid grid-cols-4 gap-4">
          <InputComponentDefault
            id="title-value"
            title="Border"
            type="number"
            onChange={() => {}}
            placeholder="px"
            required={true}
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="cols-span-2">
            <InputComponentDefault
              id="title-value"
              title="link Image"
              type="text"
              onChange={() => {}}
              placeholder="http://image.com"
              required={true}
            />
          </div>
          <InputComponentDefault
            id="title-value"
            title="Editing Controller"
            type="number"
            onChange={() => {}}
            placeholder=""
            required={true}
          />
        </div>
      </div>
    </div>
  );
}

export function ImageSquareRoundedTemp({ value, onChange, deleteItem }) {
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
            id="title-value"
            title="Top"
            type="number"
            onChange={() => {}}
            placeholder="px"
            required={true}
          />
          <InputComponentDefault
            id="title-value"
            title="Right"
            type="number"
            onChange={() => {}}
            placeholder="px"
            required={true}
          />
          <InputComponentDefault
            id="title-value"
            title="Bottom"
            type="number"
            onChange={() => {}}
            placeholder="px"
            required={true}
          />
          <InputComponentDefault
            id="title-value"
            title="Left"
            type="number"
            onChange={() => {}}
            placeholder="px"
            required={true}
          />
        </div>
        <div className="grid grid-cols-4 gap-4">
          <InputComponentDefault
            id="title-value"
            title="Width"
            type="number"
            onChange={() => {}}
            placeholder="px"
            required={true}
          />
          <InputComponentDefault
            id="title-value"
            title="Height"
            type="number"
            onChange={() => {}}
            placeholder="px"
            required={true}
          />
        </div>
        <div className="grid grid-cols-4 gap-4">
          <InputComponentDefault
            id="title-value"
            title="Color"
            type="number"
            onChange={() => {}}
            placeholder="px"
            required={true}
          />
        </div>
        <div className="grid grid-cols-4 gap-4">
          <InputComponentDefault
            id="title-value"
            title="Border"
            type="number"
            onChange={() => {}}
            placeholder="px"
            required={true}
          />
          <InputComponentDefault
            id="title-value"
            title="Rounded"
            type="number"
            onChange={() => {}}
            placeholder="px"
            required={true}
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="cols-span-2">
            <InputComponentDefault
              id="title-value"
              title="link Image"
              type="text"
              onChange={() => {}}
              placeholder="http://image.com"
              required={true}
            />
          </div>
          <InputComponentDefault
            id="title-value"
            title="Editing Controller"
            type="number"
            onChange={() => {}}
            placeholder=""
            required={true}
          />
        </div>
      </div>
    </div>
  );
}

export function ImageCircleTemp({ value, onChange, deleteItem }) {
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
            id="title-value"
            title="Top"
            type="number"
            onChange={() => {}}
            placeholder="px"
            required={true}
          />
          <InputComponentDefault
            id="title-value"
            title="Right"
            type="number"
            onChange={() => {}}
            placeholder="px"
            required={true}
          />
          <InputComponentDefault
            id="title-value"
            title="Bottom"
            type="number"
            onChange={() => {}}
            placeholder="px"
            required={true}
          />
          <InputComponentDefault
            id="title-value"
            title="Left"
            type="number"
            onChange={() => {}}
            placeholder="px"
            required={true}
          />
        </div>
        <div className="grid grid-cols-4 gap-4">
          <InputComponentDefault
            id="title-value"
            title="Width"
            type="number"
            onChange={() => {}}
            placeholder="px"
            required={true}
          />
          <InputComponentDefault
            id="title-value"
            title="Height"
            type="number"
            onChange={() => {}}
            placeholder="px"
            required={true}
          />
        </div>
        <div className="grid grid-cols-4 gap-4">
          <InputComponentDefault
            id="title-value"
            title="Color"
            type="number"
            onChange={() => {}}
            placeholder="px"
            required={true}
          />
        </div>
        <div className="grid grid-cols-4 gap-4">
          <InputComponentDefault
            id="title-value"
            title="Border"
            type="number"
            onChange={() => {}}
            placeholder="px"
            required={true}
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="cols-span-2">
            <InputComponentDefault
              id="title-value"
              title="link Image"
              type="text"
              onChange={() => {}}
              placeholder="http://image.com"
              required={true}
            />
          </div>
          <InputComponentDefault
            id="title-value"
            title="Editing Controller"
            type="number"
            onChange={() => {}}
            placeholder=""
            required={true}
          />
        </div>
      </div>
    </div>
  );
}
