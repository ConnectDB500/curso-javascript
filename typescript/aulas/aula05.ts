// Tuplas

type NameList = string[] // Array

type CalendarDate = [day: number, month: number, year: number] // Tupla

const list: NameList = []

list.push("Javascript");

const date: CalendarDate = [25, 6, 2025];


// destructuring
function createDate(date: CalendarDate){ 
  const [day, month, year] = date;
}

createDate(date)