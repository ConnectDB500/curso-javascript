// as const

const colors = ["vermelho", "azul", "verde", "amarelo"] as const

const [red, ...others] = colors;

//
const directions = ["north", "south", "east", "west"] as const;

type Directions = typeof directions[number];

//
function setStatus(status: "sucess" | "error" | "pending"){
  console.log(`Status: ${status}`);
}

let currentStatus = "sucess" as const;

setStatus(currentStatus)

//
const Action = {
  create: 1,
  update: 2,
  delete: 3
} as const;

type ActionEnum = typeof Action;
type Actions = keyof ActionEnum;

function manage(action: Actions | ActionEnum){
  if (typeof action === "string"){
    action;
    return;
  }
  action;
}