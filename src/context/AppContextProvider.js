import React from "react";

import { CombineComponents } from "./CombineComponents";
import { LoadingProvider } from "./LoadingContext";
import { PageProvider } from "./PageContext";
import { RatioTemplateProvider } from "./RatioTemplateContext";
import { SidebarProvider } from "./SidebarContext";
import { UserProvider } from "./UserContext";

const providers = [
  UserProvider,
  PageProvider,
  LoadingProvider,
  SidebarProvider,
  RatioTemplateProvider,
];
export const AppContextProvider = CombineComponents(...providers);
