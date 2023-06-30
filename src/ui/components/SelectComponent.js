export function SelectComponentDefault({
  id,
  title,
  onChange,
  placeholder,
  value,
  items,
  required,
  disabled,
}) {
  return (
    <div className="w-full">
      <label
        htmlFor={id}
        className="block text-md font-semibold text-gray-600 uppercase"
      >
        {title}
      </label>
      <select
        disabled={disabled}
        onChange={onChange}
        required={required}
        defaultValue={value.id}
        className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
      >
        <option disabled>{placeholder}</option>
        {items?.map((item, index) => {
          return (
            <option key={index} value={index}>
              {item.title}
            </option>
          );
        })}
      </select>
    </div>
  );
}
