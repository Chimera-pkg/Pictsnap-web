import { createContext, useState } from "react";

export const RatioTemplateContext = createContext();

export const RatioTemplateProvider = (props) => {
  const [ratioTemplate, setRatioTemplate] = useState(1 / 4);

  return (
    <RatioTemplateContext.Provider value={{ ratioTemplate, setRatioTemplate }}>
      {props.children}
    </RatioTemplateContext.Provider>
  );
};
