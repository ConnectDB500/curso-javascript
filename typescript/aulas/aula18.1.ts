// keyof 

import config from "../config.json"

type ColorKey = keyof typeof config.colors;

function coloredLog(color: ColorKey, text: string){
  console.log(config.colors["color"])
}

coloredLog("sucess", "Hello world")