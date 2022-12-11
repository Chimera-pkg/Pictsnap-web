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
import { TemplateDesign } from "src/ui/components/TemplateCertificateComponent";
import { ContainerSquareInput } from "src/ui/templates/ContainerInput";

export function CreateTemplatePage() {
  const navigate = useNavigate();

  const { loading, setLoading } = useContext(LoadingContext);

  const [data, setData] = useState([]);

  const [modalInformationLittle, setModalInformationLittle] = useState({
    status: false,
    description: "",
  });

  function handleChange(event) {
    setData({ ...data, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    setLoading(false);

    setModalInformationLittle({
      status: true,
      description: `Template berhasil dibuat`,
    });
  }

  const handleCloseModal = () => {
    setModalInformationLittle({
      status: false,
      title: "",
      description: "",
    });
    navigate("/");
  };

  const handleRemoveItem = (idx) => {
    const temp = [...data];
    console.log(idx);
    console.log(temp);

    temp.splice(idx, 1);

    setData(temp);
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
      <div className="lg:w-11/12 w-full lg:p-12 md:p-8 p-6 bg-white mt-5 rounded-lg shadow-lg">
        <h1 className="text-xl font-semibold">
          Hallo 👋<span className="font-normal"></span>
        </h1>

        <div className="flex justify-center">
          <TemplateDesign />
        </div>

        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="form grid grid-cols-1 gap-4">
            {data.map((item, index) => {
              return (
                <ContainerSquareInput
                  value=""
                  onChange={() => {}}
                  deleteItem={() => {
                    handleRemoveItem(index);
                  }}
                />
              );
            })}
          </div>
          <button
            className="block bg-yellow-400 mt-10"
            type="button"
            onClick={() => {
              setData([...data, "container-square"]);
            }}
          >
            Tap
          </button>
          <button
            type="submit"
            className="py-3 pl-5 pr-5 mr-2 mt-5 transition-colors duration-700 transform bg-indigo-500 hover:bg-blue-400 text-gray-100 text-md border-indigo-300"
          >
            Buat Template
          </button>
        </form>
      </div>
    </>
  );
}
