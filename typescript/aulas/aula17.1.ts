// typeof

import packageJson from "../package.json";

packageJson

type PackageJson = typeof packageJson;

function main(json: PackageJson){
  json
}

