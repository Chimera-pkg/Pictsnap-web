import { FaUpload } from "react-icons/fa";

export function InputComponentDefault({
  id,
  title,
  type,
  onChange,
  placeholder,
  value,
  required,
  hidden = false,
}) {
  return (
    <div className="">
      {hidden ? (
        ""
      ) : (
        <label
          htmlFor={id}
          className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
        >
          {title}
        </label>
      )}
      <input
        id={id}
        type={hidden ? "hidden" : type}
        name={id}
        onChange={onChange}
        placeholder={placeholder}
        className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
        value={value}
        required={required}
      />
    </div>
  );
}

export function InputComponentTextarea({
  id,
  title,
  type,
  onChange,
  placeholder,
  value,
  rows,
  required,
}) {
  return (
    <>
      <label
        htmlFor={id}
        className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
      >
        {title}
      </label>
      <textarea
        id={id}
        type={type}
        name={id}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
        value={value}
        required
      ></textarea>
    </>
  );
}

export function InputComponentFile({ id, title, onChange, placeholder }) {
  return (
    <div className="my-5">
      <label
        htmlFor={id}
        className="block mt-2 mb-2 text-xs font-semibold text-gray-600 uppercase"
      >
        {title}
      </label>
      <div className="relative h-32 mb-5">
        <div className="border-2 border-dashed border-dark border-opacity-90 text-dark font-bold w-full h-32 rounded-xl flex flex-col justify-center items-center absolute z-0">
          <FaUpload />
          <span className="ml-2 mt-2 w-96 text-center">{placeholder}</span>
        </div>
        <input
          className="cursor-pointer w-full h-32 opacity-0 pin-r pin-t absolute z-10"
          type="file"
          name="file"
          onChange={onChange}
          accept=".csv"
          required
        />
      </div>
    </div>
  );
}

export function InputComponentImage({ id, title, onChange, placeholder }) {
  return (
    <div className="my-5">
      <label
        htmlFor={id}
        className="block mt-2 mb-2 text-xs font-semibold text-gray-600 uppercase"
      >
        {title}
      </label>
      <div className="relative h-32 mb-5">
        <div className="border-2 border-dashed border-dark border-opacity-90 text-dark font-bold w-full h-32 rounded-xl flex flex-col justify-center items-center absolute z-0">
          <FaUpload />
          <span className="ml-2 mt-2 w-96 text-center">{placeholder}</span>
        </div>
        <input
          className="cursor-pointer w-full h-32 opacity-0 pin-r pin-t absolute z-10"
          type="file"
          name="file"
          onChange={onChange}
          accept="image/*"
          required
        />
      </div>
    </div>
  );
}

export function DropdownComponentColor({
  id,
  title,
  type,
  onChange,
  placeholder,
  value,
  required,
  items,
}) {
  return (
    <div className="">
      <label
        htmlFor={id}
        className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
      >
        {title}
      </label>
      <select
        name={id}
        id={id}
        onChange={onChange}
        className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
        defaultValue={value}
      >
        {items?.map((item, index) => {
          return (
            <option key={index} value={index}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export function DropdownComponentDefault({
  id,
  title,
  type,
  onChange,
  placeholder,
  value,
  required,
  items,
}) {
  return (
    <div className="">
      <label
        htmlFor={id}
        className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
      >
        {title}
      </label>
      <select
        name={id}
        id={id}
        onChange={onChange}
        className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
        defaultValue={value}
      >
        {items?.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
}
