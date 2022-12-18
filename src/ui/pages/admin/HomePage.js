import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ConfigServices } from "src/services/ConfigServices";
import { TypeTemplates } from "src/shared/TypeTemplates";
import { SelectComponentDefault } from "src/ui/components/SelectComponent";
import {
  TableComponentAction,
  TableComponentDefault,
} from "src/ui/components/TableComponent";
import { TemplateDesign } from "src/ui/components/TemplateDesignComponent";

export function HomePage() {
  const navigate = useNavigate();
  const configServices = new ConfigServices();
  const [templates, setTemplates] = useState([]);
  const [typeTemplate, setTypeTemplate] = useState(TypeTemplates[0]);

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

  return (
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
          navigate("/template/" + name);
        }}
        handleDelete={(name) => {
          configServices.delete(name);
        }}
      />
    </div>
  );
}
