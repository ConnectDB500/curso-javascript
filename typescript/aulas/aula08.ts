// Union types |

type Primitives = string | number | boolean;

function main(value: Primitives){
  if (typeof value === "string"){
    value;
  }
  if (typeof value === "number"){
    value;
  }
  if (typeof value === "boolean"){

    return ;
  }
  value;
}