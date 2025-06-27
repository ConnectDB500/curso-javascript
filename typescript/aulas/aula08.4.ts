// Union types

type FindItemPredicate = (number) | ((value: string, index: number) => {})

function findItem(array: string[], predicate: FindItemPredicate){
  if (typeof predicate === "number"){
    return array[predicate];
  }
  array.find(predicate)
}

findItem(["Flamengo", "Real Madrid", "Borussia"], 0)

findItem(["Flamengo", "Real Madrid", "Borussia"], (value) => value.startsWith("B"))