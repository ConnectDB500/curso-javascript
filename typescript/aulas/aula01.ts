interface ShowInfoOptions {
  displayDay?: boolean;
  displayMonth?: boolean;
  displayYear?: boolean;
}

function showInfo(date: Date, options: ShowInfoOptions = {}){
  console.log(date.toLocaleDateString());
  if (options.displayDay){
    console.log("dia", date.getDate())
  }
  if (options.displayMonth){
    console.log("mes", date.getMonth())
  }
  if (options.displayDay){
    console.log("ano", date.getFullYear())
  }
}

showInfo(new Date(), {displayDay: true, displayMonth: true, displayYear: true})