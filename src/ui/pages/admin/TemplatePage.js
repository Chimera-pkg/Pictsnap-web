import { useEffect, useState } from "react";
import { ConfigServices } from "src/services/ConfigServices";
import { TypeTemplates } from "src/shared/TypeTemplates";
import { SelectComponentDefault } from "src/ui/components/SelectComponent";
import { TemplateDesign } from "src/ui/components/TemplateDesignComponent";

export default function TemplatePage() {
  const configServices = new ConfigServices();
  const [configs, setConfigs] = useState([]);
  const [typeTemplate, setTypeTemplate] = useState(TypeTemplates[0]);

  useEffect(() => {
    fetch(typeTemplate);
  }, []);

  async function fetch(type) {
    const res = await configServices.getAllByName(type.name);

    const data = [];
    res.map((el) => {
      data.push(JSON.parse(el.content_json));
    });

    setConfigs(data);
  }

  return (
    <div>
      <h1 className="hidden">Halaman Template</h1>
      <div className="flex items-end gap-4 mt-4">
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

      <div className="flex flex-wrap gap-4 mt-8">
        {configs.map((config, idx) => {
          console.log(config[config.length - 1]);
          return (
            <TemplateDesign
              type={typeTemplate}
              components={config}
              colors={config[config.length - 1].colors}
            />
          );
        })}
      </div>
    </div>
  );
}
