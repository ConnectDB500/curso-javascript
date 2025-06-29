// Function

type Args = string | number | boolean;

function  bootstrap(dirname: string, args?: Args[]): boolean{
  return true;
}

type MainFunction = (args: string[]) => void;

const main: MainFunction = (args) => {}
