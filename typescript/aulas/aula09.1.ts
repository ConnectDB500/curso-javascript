// Function

interface Functions {
  run(context: any):void;
  execute(): boolean;
  handle(req: Request, res: Response): void;
}

const funcs: Functions = {
  execute(){
    return true;
  },
  handle(req, res){},
  run(context){}
}

function oldCustomLog(text: string, color: string = "green", time?: Date, author?: string){
  console.log(color, text);
  if (time) console.log("At: ", time.toString());
  if (author) console.log("By: ", author.toString());
}

oldCustomLog("Hello, world!", "yellow", new Date(), "J.K. Rowling");
interface CustomLogOptions{
  color?: string,
  time?: Date,
  author?: string
}

function customLog(text: string, options: CustomLogOptions = {}){
  const { color="red", author, time} = options;
  console.log(color, text);
  if (time) console.log("At: ", time.toString());
  if (author) console.log("By: ", author.toString());
}
