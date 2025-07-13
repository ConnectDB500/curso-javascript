// typeof

import config from "../config.json";

type Colors = typeof config.colors;

function createColors(schema: Colors){}

createColors({
  "azoxo": "#ffffff",
  sucess: "",
  danger: "",
  primary: "",
  secundary: "",
  default: "", 
  info: "",
  warning: "",
  magic: "",
  green: "",
  fuchsia: ""
})