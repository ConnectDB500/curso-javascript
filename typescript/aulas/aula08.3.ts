// Union types

import { readFile } from "fs/promises";

type JSONvalue = string | number | boolean | JSONvalue[] | {[key: string]: JSONvalue};

const jsonstring = await readFile("index.ts", "utf-8");
const json: JSONvalue = JSON.parse(jsonstring);

if (typeof json === "string"){
  json;
}
if (Array.isArray(json)){
  json.forEach(value => {
    if (typeof value === "number"){
      value;
    }
  })
}