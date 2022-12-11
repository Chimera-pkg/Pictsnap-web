import { FiEyeOff, FiTrash } from "react-icons/fi";
import { InputComponentDefault } from "../components/InputComponent";

export function ContainerSquareInput({ value, onChange, deleteItem }) {
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="block text-md font-semibold text-gray-600 uppercase">
          Container Square
        </h2>
        <div className="flex gap-2">
          <button
            type="button"
            className="rounded-md bg-gray-400 w-8 h-8 flex justify-center items-center cursor-pointer"
          >
            <FiEyeOff color="#fff" />
          </button>
          <button
            type="button"
            onClick={deleteItem}
            className="rounded-md bg-red-500 w-8 h-8 flex justify-center items-center cursor-pointer"
          >
            <FiTrash color="#fff" />
          </button>
        </div>
      </div>
      <div>
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
      </div>
    </div>
  );
}

export function ContainerSquareRoundedInput(value, onChange) {
  return (
    <div>
      <div>
        <h2 className="block mt-2 text-md font-semibold text-gray-600 uppercase">
          Container Square Rounded
        </h2>
        <FiTrash />
      </div>
      <div>
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
      </div>
    </div>
  );
}

export function ContainerCircleInput(value, onChange) {
  return (
    <div>
      <h2 className="block mt-2 text-md font-semibold text-gray-600 uppercase">
        Container Circle
      </h2>
      <div>
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
      </div>
    </div>
  );
}
