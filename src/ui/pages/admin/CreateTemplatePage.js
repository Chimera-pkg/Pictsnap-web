import { useContext, useEffect, useState } from "react";
import {
  InputComponentDefault,
  InputComponentFile,
  InputComponentImage,
  InputComponentTextarea,
} from "src/ui/components/InputComponent";
import { ModalInformationLittle } from "src/ui/components/ModalInformationComponent";
import { useNavigate } from "react-router-dom";
import { Loading } from "src/ui/components/Loader";
import { LoadingContext } from "src/context/LoadingContext";
import { TemplateDesign } from "src/ui/components/TemplateDesignComponent";
import {
  ContainerCircleInput,
  ContainerSquareInput,
  ContainerSquareRoundedInput,
} from "src/ui/templates/ContainerInput";
import { SelectComponentDefault } from "src/ui/components/SelectComponent";
import { ButtonComponentDefault } from "src/ui/components/ButtonComponent";
import { itemComponents } from "src/shared/ItemsComponents";
import { TextInput } from "src/ui/templates/TextInput";
import {
  ImageLogoInput,
  ImageCircleInput,
  ImageSquareInput,
  ImageSquareRoundedInput,
} from "src/ui/templates/ImageInput";
import { FrameInput } from "src/ui/templates/FrameInput";
import { TypeTemplates } from "src/shared/TypeTemplates";
import { PosterTemplate } from "src/shared/TestTemplate";
import { ConfigServices } from "src/services/ConfigServices";
import {
  handleCheckToInteger,
  handleConvertToInteger,
} from "src/shared/HandleInputStringToInteger";

export function CreateTemplatePage() {
  const navigate = useNavigate();

  const { loading, setLoading } = useContext(LoadingContext);

  const [typeTemplate, setTypeTemplate] = useState(TypeTemplates[0]);
  const [components, setComponents] = useState([]);
  // const [components, setComponents] = useState(PosterTemplate);
  const [tempSelectComp, setTempSelectComp] = useState(itemComponents[0]);

  const [colors, setColors] = useState([
    "FB8500",
    "FB8500",
    "FFFFFF",
    "FFFFFF",
  ]);

  const [modalInformationLittle, setModalInformationLittle] = useState({
    status: false,
    description: "",
  });

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    let temp = [];

    components.map((item) => {
      temp.push(handleConvertToInteger(item));
    });

    if (components.length > 0) {
      const content_json = [
        ...temp,
        {
          id: "colors_comp",
          colors: colors,
        },
      ];

      const data = {
        name: typeTemplate.name + new Date().getTime(),
        content_json: JSON.stringify(content_json),
      };

      const configServices = new ConfigServices();

      const res = await configServices.add(data);
    }

    setLoading(false);

    if (components.length > 0) {
      setModalInformationLittle({
        status: true,
        description: `Template berhasil dibuat`,
      });
    }
  }

  const handleCloseModal = () => {
    setModalInformationLittle({
      status: false,
      title: "",
      description: "",
    });
    navigate("/template");
  };

  const handleRemoveItem = (idx) => {
    const temp = [...components];
    temp.splice(idx, 1);

    setComponents(temp);
  };

  const handleChangeProperty = (idx, event) => {
    let temp = [...components];
    if (handleCheckToInteger(event.target.name))
      temp[idx][event.target.name] = parseInt(event.target.value);
    else temp[idx][event.target.name] = event.target.value;
    setComponents(temp);
  };

  return (
    <>
      <Loading loading={loading} />
      <ModalInformationLittle
        status={modalInformationLittle.status}
        title={modalInformationLittle.title}
        description={modalInformationLittle.description}
        handleClose={handleCloseModal}
      />
      <div className="w-full lg:p-8 md:p-8 p-6 mt-5 rounded-lg shadow-lg lg:flex lg:gap-6 relative">
        <div className="bg-white p-12 w-auto">
          <form className="mt-6" onSubmit={handleSubmit}>
            <div className="form grid grid-cols-1 gap-4">
              <div className="grid grid-cols-1">
                <SelectComponentDefault
                  title="Tipe Template"
                  id="typeTemplates"
                  onChange={(item) => {
                    setTypeTemplate(TypeTemplates[item.target.value]);
                  }}
                  placeholder="Pilih Template"
                  value={typeTemplate}
                  items={TypeTemplates}
                  required={true}
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                <div className="flex items-end">
                  <InputComponentDefault
                    id="color0"
                    title="Warna 0"
                    type="text"
                    onChange={(event) => {
                      let temp = [...colors];
                      temp[0] = event.target.value;
                      setColors(temp);
                    }}
                    placeholder="FFFFFF"
                    value={colors[0]}
                    required={true}
                  />
                  <div className={`bg-[#${colors[0]}] w-3 h-12`}></div>
                </div>
                <div className="flex items-end">
                  <InputComponentDefault
                    id="color1"
                    title="Warna 1"
                    type="text"
                    onChange={(event) => {
                      let temp = [...colors];
                      temp[1] = event.target.value;
                      setColors(temp);
                    }}
                    placeholder="FFFFFF"
                    value={colors[1]}
                    required={true}
                  />
                  <div className={`bg-[#${colors[1]}] w-3 h-12`}></div>
                </div>
                <div className="flex items-end">
                  <InputComponentDefault
                    id="color2"
                    title="Warna 2"
                    type="text"
                    onChange={(event) => {
                      let temp = [...colors];
                      temp[2] = event.target.value;
                      setColors(temp);
                    }}
                    placeholder="FFFFFF"
                    value={colors[2]}
                    required={true}
                  />
                  <div className={`bg-[#${colors[2]}] w-3 h-12`}></div>
                </div>
                <div className="flex items-end">
                  <InputComponentDefault
                    id="color3"
                    title="Warna 3"
                    type="text"
                    onChange={(event) => {
                      let temp = [...colors];
                      temp[3] = event.target.value;
                      setColors(temp);
                    }}
                    placeholder="FFFFFF"
                    value={colors[3]}
                    required={true}
                  />
                  <div className={`bg-[#${colors[3]}] w-3 h-12`}></div>
                </div>
              </div>
              {components.map((item, index) => {
                switch (item.id) {
                  case "frame_comp":
                    return (
                      <FrameInput
                        value={item}
                        onChange={(event) => {
                          handleChangeProperty(index, event);
                        }}
                        deleteItem={() => {
                          handleRemoveItem(index);
                        }}
                      />
                    );
                    break;
                  case "image_logo_comp":
                    return (
                      <ImageLogoInput
                        value={item}
                        onChange={(event) => {
                          handleChangeProperty(index, event);
                        }}
                        deleteItem={() => {
                          handleRemoveItem(index);
                        }}
                      />
                    );
                    break;
                  case "image_square_comp":
                    return (
                      <ImageSquareInput
                        value={item}
                        onChange={(event) => {
                          handleChangeProperty(index, event);
                        }}
                        deleteItem={() => {
                          handleRemoveItem(index);
                        }}
                      />
                    );
                    break;
                  case "image_square_rounded_comp":
                    return (
                      <ImageSquareRoundedInput
                        value={item}
                        onChange={(event) => {
                          handleChangeProperty(index, event);
                        }}
                        deleteItem={() => {
                          handleRemoveItem(index);
                        }}
                      />
                    );
                    break;
                  case "image_circle_comp":
                    return (
                      <ImageCircleInput
                        value={item}
                        onChange={(event) => {
                          handleChangeProperty(index, event);
                        }}
                        deleteItem={() => {
                          handleRemoveItem(index);
                        }}
                      />
                    );
                    break;
                  case "container_square_comp":
                    return (
                      <ContainerSquareInput
                        value={item}
                        onChange={(event) => {
                          handleChangeProperty(index, event);
                        }}
                        deleteItem={() => {
                          handleRemoveItem(index);
                        }}
                      />
                    );
                    break;
                  case "container_square_rounded_comp":
                    return (
                      <ContainerSquareRoundedInput
                        value={item}
                        onChange={(event) => {
                          handleChangeProperty(index, event);
                        }}
                        deleteItem={() => {
                          handleRemoveItem(index);
                        }}
                      />
                    );
                    break;
                  case "container_circle_comp":
                    return (
                      <ContainerCircleInput
                        value={item}
                        onChange={(event) => {
                          handleChangeProperty(index, event);
                        }}
                        deleteItem={() => {
                          handleRemoveItem(index);
                        }}
                      />
                    );
                    break;
                  case "text_comp":
                    return (
                      <TextInput
                        value={item}
                        onChange={(event) => {
                          handleChangeProperty(index, event);
                        }}
                        deleteItem={() => {
                          handleRemoveItem(index);
                        }}
                      />
                    );
                    break;
                }
              })}
            </div>
            <div className="flex gap-4 mt-5">
              <SelectComponentDefault
                title="Tambah Komponen"
                id="addItem"
                onChange={(index) => {
                  setTempSelectComp(itemComponents[index.target.value]);
                }}
                placeholder="Pilih Komponen"
                value={tempSelectComp}
                items={itemComponents}
                required={true}
              />
              <div className="pt-8">
                <ButtonComponentDefault
                  title="+"
                  onTap={() => {
                    setComponents([...components, tempSelectComp]);
                  }}
                />
              </div>
            </div>

            <button
              type="submit"
              className="py-3 pl-5 pr-5 mr-2 mt-5 transition-colors duration-700 transform bg-[#FB8500] hover:bg-[#FFB703] text-gray-100 text-md border-indigo-300"
            >
              Buat Template
            </button>
          </form>
        </div>

        <div className="bg-white lg:w-2/5 lg:p-4 relative">
          <div className="lg:sticky lg:top-20">
            <h1 className="text-xl font-semibold">
              Hallo Admin👋<span className="font-normal"></span>
            </h1>

            <div className="mx-auto">
              <TemplateDesign
                type={TypeTemplates[typeTemplate.id]}
                components={components}
                colors={colors}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
