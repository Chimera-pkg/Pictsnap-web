import { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ConfigServices } from "src/services/ConfigServices";
import { TypeTemplates } from "src/shared/TypeTemplates";
import { SelectComponentDefault } from "src/ui/components/SelectComponent";
import {
  TableComponentAction,
  TableComponentDefault,
} from "src/ui/components/TableComponent";
import { TemplateDesign } from "src/ui/components/TemplateDesignComponent";
import { LoadingContext } from "src/context/LoadingContext";
import { Loading } from "src/ui/components/Loader";
import {
  ModalConfirmationComponent,
  ModalInformationLittle,
} from "src/ui/components/ModalInformationComponent";

export function HomePage() {
  const navigate = useNavigate();
  const configServices = new ConfigServices();
  const [templates, setTemplates] = useState([]);
  const [typeTemplate, setTypeTemplate] = useState(TypeTemplates[0]);

  const { loading, setLoading } = useContext(LoadingContext);
  const [modalConfirmationComponent, setModalConfirmationComponent] = useState({
    status: false,
    content1: "",
    content2: "",
  });

  const [tempName, setTempName] = useState("");

  useEffect(() => {
    fetch(typeTemplate);
  }, []);

  async function fetch(type) {
    const res = await configServices.getAllByName(type.name);

    var temp = [];

    for (let i = 0; i < res.length; i++) {
      temp.push([res[i].id, res[i].name, res[i].created_at, res[i].updated_at]);
    }

    setTemplates(temp);
  }

  const handleDeleteTemp = async () => {
    setLoading(true);

    const res = await configServices.delete(tempName);

    setLoading(false);

    setModalConfirmationComponent({
      status: false,
      content1: "",
      content2: "",
    });

    window.location.reload(false);
  };

  const deleteTemp = async (name) => {
    setTempName(name);
    setModalConfirmationComponent({
      status: true,
      content1: `Hapus template?`,
      content2: `Template tidak dapat dikembalikan setelah dihapus`,
    });
  };

  const handleCloseModal = () => {
    setTempName("");
    setModalConfirmationComponent({
      status: false,
      content1: "",
      content2: "",
    });
  };

  return (
    <>
      <Loading loading={loading} />
      <ModalConfirmationComponent
        status={modalConfirmationComponent.status}
        content1={modalConfirmationComponent.content1}
        content2={modalConfirmationComponent.content2}
        handleSubmit={handleDeleteTemp}
        handleClose={handleCloseModal}
        titleAction="Hapus"
      />
      <div>
        <h1 className="hidden">Daftar Template</h1>
        <div className="flex items-end gap-4 my-4">
          <SelectComponentDefault
            title="Tipe Template"
            id="typeTemplates"
            onChange={async (item) => {
              await fetch(TypeTemplates[item.target.value]);
              setTypeTemplate(TypeTemplates[item.target.value]);
            }}
            placeholder="Pilih Template"
            value={typeTemplate}
            items={TypeTemplates}
            required={true}
          />
        </div>
        <TableComponentAction
          header={["id", "nama", "Di buat", "di update", "aksi"]}
          body={templates}
          handleEdit={(name) => {
            navigate("/template/" + name + "/" + typeTemplate.id);
          }}
          handleDelete={deleteTemp}
        />
      </div>
    </>
  );
}
