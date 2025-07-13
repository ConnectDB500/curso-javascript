// Record

type Dictionary = Record<string, number | string | boolean>

const dict: Dictionary = {
  id: 10,
  name: "Jeffren",
  isProgrammer: true
}

//
type Feature = "compileOnSave" | "autoSave" | "autoUpDate"

type Features = Record<Feature, boolean>

const config: Features = {
  autoSave: true,
  autoUpDate: false,
  compileOnSave: false
}

