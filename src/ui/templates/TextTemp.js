export function TextTemp() {
  return (
    <div>
      <h2 className="block mt-2 text-md font-semibold text-gray-600 uppercase">
        Text
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
            title="Font Size"
            type="number"
            onChange={() => {}}
            placeholder="px"
            required={true}
          />
          <InputComponentDefault
            id="title-value"
            title="Text Align"
            type="text"
            onChange={() => {}}
            placeholder=""
            required={true}
          />
          <InputComponentDefault
            id="title-value"
            title="Font Weight"
            type="text"
            onChange={() => {}}
            placeholder=""
            required={true}
          />
          <InputComponentDefault
            id="title-value"
            title="Font Family"
            type="text"
            onChange={() => {}}
            placeholder=""
            required={true}
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="cols-span-2">
            <InputComponentDefault
              id="title-value"
              title="Text"
              type="text"
              onChange={() => {}}
              placeholder=""
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
