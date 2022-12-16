import { createContext, useState } from "react";

export const RatioTemplateContext = createContext();

export const RatioTemplateProvider = (props) => {
  const [ratioTemplate, setRatioTemplate] = useState(1 / 2);

  return (
    <RatioTemplateContext.Provider value={{ ratioTemplate, setRatioTemplate }}>
      {props.children}
    </RatioTemplateContext.Provider>
  );
};
