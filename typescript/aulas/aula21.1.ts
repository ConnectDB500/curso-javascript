// readonly

import packageJson from "../package.json";

type StaticPackageJson = Readonly<typeof packageJson>;

function main(packageJson: StaticPackageJson){
  packageJson.devDependencies.tsx = "'"
}